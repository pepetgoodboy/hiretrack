import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get Jobs or Internship by User ID
const getJobs = async (request) => {
  const user = request.user;

  try {
    const jobs = await prisma.job.findMany({
      where: {
        userId: user.id,
      },
    });

    if (!jobs) {
      return { message: "No jobs found", status: 404 };
    }

    return { message: `${jobs.length} jobs found`, status: 200, jobs: jobs };
  } catch (error) {
    return { message: error.message, status: 500 };
  }
};

// Add Job or Internship
const addJob = async (request, body) => {
  try {
    const user = request.user;

    await prisma.job.create({
      data: {
        company: body.company,
        position: body.position,
        userId: user.id,
      },
    });

    return { message: "Successfully added job!", status: 200 };
  } catch (error) {
    return { message: error.message, status: 500 };
  }
};

// Update Status Job or Internship by ID
const updateJob = async (request, id, body) => {
  try {
    const user = request.user;

    const updatedJob = await prisma.job.updateMany({
      where: {
        id: id,
        userId: user.id,
      },
      data: {
        status: body.status,
      },
    });

    if (updatedJob.count === 0) {
      return { message: "No jobs found", status: 404 };
    }

    return { message: "Successfully updated status!", status: 200 };
  } catch (error) {
    return { message: error.message, status: 500 };
  }
};

// Delete Job or Internship by ID
const deleteJob = async (request, id) => {
  try {
    const user = request.user;

    const deletedJob = await prisma.job.deleteMany({
      where: {
        id: id,
        userId: user.id,
      },
    });

    if (deletedJob.count === 0) {
      return { message: "No jobs found", status: 404 };
    }

    return { message: "Successfully deleted job!", status: 200 };
  } catch (error) {
    return { message: error.message, status: 500 };
  }
};

export { getJobs, addJob, updateJob, deleteJob };
