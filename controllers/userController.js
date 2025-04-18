import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import validator from "validator";
import { cookies } from "next/headers";

const isProduction = process.env.MODE === "production";

const prisma = new PrismaClient();

// Create jwt token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Cookie Option
const cookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? "none" : "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000,
  path: "/",
};

// Register User
const registerUser = async (data) => {
  const { fullname, email, password } = data;
  try {
    // Check if user exists
    const user = await prisma.user.findUnique({ where: { email } });
    if (user) {
      return { message: "User already exists", status: 404 };
    }

    // Validating email and password
    if (!validator.isEmail(email)) {
      return { message: "Email must be valid", status: 403 };
    }

    // Validating password
    if (password.length < 6) {
      return {
        message: "Password must be at least 6 characters",
        status: 403,
      };
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    await prisma.user.create({
      data: {
        fullname,
        email,
        password: hashedPassword,
      },
    });
    return { message: "User registered successfully", status: 201 };
  } catch (error) {
    return { message: error.message, status: 500 };
  }
};

// Login User
const loginUser = async (data) => {
  const cookieStore = await cookies();
  const { email, password } = data;
  try {
    // Check if user exists
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return { message: "User not found", status: 404 };
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return { message: "Incorrect password", status: 401 };
    }

    const token = createToken(user.id);
    cookieStore.set("token", token, cookieOptions);

    return {
      message: "Sign In Successfully",
      token: token,
      status: 200,
    };
  } catch (error) {
    return { message: error.message, status: 500 };
  }
};

// Logout User
const logoutUser = async () => {
  const cookieStore = await cookies();
  try {
    const cookie = cookieStore.get("token");
    if (!cookie) {
      return { message: "User not logged in", status: 401 };
    }

    cookieStore.delete("token");
    return { message: "Logout Successfully", status: 200 };
  } catch (error) {
    return { message: error.message, status: 500 };
  }
};

// Check Auth
const checkAuth = async () => {
  const cookieStore = await cookies();
  try {
    const token = cookieStore.get("token");

    if (!token) {
      return { message: "User not logged in", status: 401 };
    }

    // Verify Token
    const decoded = jwt.verify(token.value, process.env.JWT_SECRET);
    const user = await prisma.user.findFirst({
      where: { id: decoded.id },
      select: { id: true, email: true, fullname: true, role: true },
    });

    if (!user) {
      return { message: "User not found", status: 404 };
    }

    return { message: "Authenticated", status: 200, user: user };
  } catch (error) {
    return { message: error.message, status: 500 };
  }
};

const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      where: { role: "User" },
      select: { id: true, fullname: true, email: true, role: true },
    });

    if (!users) {
      return { message: "No users found", status: 404 };
    }

    return {
      message: `${users.length} users found`,
      status: 200,
      users: users,
    };
  } catch (error) {
    return { message: error.message, status: 500 };
  }
};

const deleteUser = async (id) => {
  try {
    const deletedUser = await prisma.user.deleteMany({
      where: { id: id },
    });

    if (deletedUser.count === 0) {
      return { message: "No users found", status: 404 };
    }

    return { message: "Successfully deleted user!", status: 200 };
  } catch (error) {
    return { message: error.message, status: 500 };
  }
};

export {
  registerUser,
  loginUser,
  logoutUser,
  checkAuth,
  getAllUsers,
  deleteUser,
};
