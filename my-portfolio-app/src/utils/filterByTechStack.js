const filterByTechStack = (arr, keyword) => {
    const filterArr = [...arr]
  if (keyword !== "All"){ return filterArr.filter(project =>
    project.techStack.toLowerCase().includes(keyword.toLowerCase())
  );}
  else {return filterArr;}
};

export default filterByTechStack;