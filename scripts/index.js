const output = () => {
  const info = {
    fullName: "favour igwe",
    hngid: "HNG-01067",
    email: "favchiazokam@gmail.com",
    language: "javascript",
  };

  return (
    "Hello World, this is " +
    info.fullName +
    " with HNGi7 ID " +
    info.hngid +
    " using " +
    info.language +
    " for stage 2 task " +
    info.email
  );
};

console.log(output());
