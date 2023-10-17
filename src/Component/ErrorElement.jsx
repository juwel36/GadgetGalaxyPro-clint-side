

const ErrorElement = () => {
  const handleback =()=> {

    window.history.back();
  }

  return (
    <div>
        <div>
      <h1 className="text-center font-bold text-3xl mt-16">Uppppps !</h1>
      <p className="text-center  mt-9">Somthing Wrong</p>
      <div className="flex items-center justify-center mt-9">
        <button onClick={handleback} >Go Back</button>
      </div>
    </div>
    </div>
  );
};

export default ErrorElement;