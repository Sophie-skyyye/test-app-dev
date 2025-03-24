const getCourses = (req, res) => {
    return res.status(200).json(['App dev', 'DB2', 'DB 3', 'Ops 2', 'Secuirty']);
  };
  
  export { getCourses };
  