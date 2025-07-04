  const handleScroll = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      console.log("id in handleScroll", id);
      console.log("element in handleScroll",element);
      if (element) {
        element.scrollIntoView({ behavior: "auto" });
      }
    }, 50);
  };
  
  export default handleScroll;