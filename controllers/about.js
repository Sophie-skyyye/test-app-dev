const getAbout = (req, res) => {
    return res.status(200).json({
      learnerId: '10000115856',
      firstName: 'Sophie',
      lastName: 'Dickerson',
      email: 'dickss3@student.op.ac.nz',
      enjoyIT: 'I enjoy problem-solving and creating new projects!',
    });
  };
  
  export { getAbout };
  