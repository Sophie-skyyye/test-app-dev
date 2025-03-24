import prisma from "../../prisma/client.js";

// Add the following code under import prisma from "../prisma/client.js";
const createDepartment = async (req, res) => {
    // Try/catch blocks are used to handle exceptions
    try {
      // Create a new institution
      await prisma.department.create({
        // Data to be inserted
        data: {
            name: req.body.name,
            institutionId: req.body.institutionId,
        },
      });
  
      // Get all institutions from the institution table
      const newDepartments = await prisma.department.findMany();
  
      // Send a JSON response
      return res.status(201).json({
        message: "Department successfully created",
        data: newDepartments,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  };


  // Add the following code under the createInstitution function
const getDepartments = async (req, res) => {
    try {
      const departments = await prisma.department.findMany();
  
      // Check if there are no institutions
      if (!departments) {
        return res.status(404).json({ message: "No departments found" });
      }
  
      return res.status(200).json({
        data: departments,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  };

  // Add the following code under the getInstitutions function
const getDepartment = async (req, res) => {
    try {
      const Department = await prisma.Department.findUnique({
        where: { id: req.params.id },
      });
  
      // Check if there is no institution
      if (!department) {
        return res.status(404).json({
          message: `No department with the id: ${req.params.id} found`,
        });
      }
  
      return res.status(200).json({
        data: department,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  };

  // Add the following code under the getInstitution function
const updateDepartment = async (req, res) => {
    try {
      // Find the institution by id
      let department = await prisma.department.findUnique({
        where: { id: req.params.id },
      });
  
      // Check if there is no institution
      if (!department) {
        return res.status(404).json({
          message: `No department with the id: ${req.params.id} found`,
        });
      }
  
      // Update the institution
      department = await prisma.department.update({
        where: { id: req.params.id },
        data: {
          // Data to be updated
          name: req.body.name,
        institutionId: req.body.institutionId,
        },
      });
  
      return res.status(200).json({
        message: `Department with the id: ${req.params.id} successfully updated`,
        data: department,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  };

  // Add the following code under the updateInstitution function
const deleteDepartment = async (req, res) => {
    try {
      const department = await prisma.department.findUnique({
        where: { id: req.params.id },
      });
  
      if (!department) {
        return res.status(404).json({
          message: `No department with the id: ${req.params.id} found`,
        });
      }
  
      await prisma.department.delete({
        where: { id: req.params.id },
      });
  
      return res.json({
        message: `Department with the id: ${req.params.id} successfully deleted`,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  };

  // Add the following code under the deleteInstitution function
export {
    createDepartment,
    getDepartments,
    getDepartment,
    updateDepartment,
    deleteDepartment,
  };