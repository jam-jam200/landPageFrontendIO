import React from "react";

// py-4 px-6 bg-almostBlack font-epilogue text-primary font-medium text-[18px] outline-none ${styles} rounded-[15px] hover:bg-primary hover:text-almostBlack hover:border-almostBlack border-secondary mt-[3rem]`}

function Button({ styles }) {
  return (
    <button
      type="button"
      className={`py-4 px-10 bg-almostBlack font-epilogue text-primary font-medium text-[18px] outline-none ${styles} rounded-[15px] border-[3px] hover:bg-primary  hover:text-almostBlack hover:border-almostBlack mt-[1rem] mb-[1rem]`}
    >
      Learn More
    </button>
  );
}

function LoginButton({ styles }) {
  return (
    <>
      <button
        type="button"
        className={`py-4 px-6 font-epilogue text-secondary font-medium text-[18px] outline-none ${styles} rounded-[10px] hover:bg-primary hover:text-almostBlack hover:border-almostBlack  ml-[30px] mr-[10px]`}
      >
        Login
      </button>
      <button
        type="button"
        className={`py-2 px-5 font-epilogue text-secondary font-medium text-[18px] outline-none border-secondary ${styles} rounded-[15px] border-[3px] hover:bg-primary  hover:text-almostBlack hover:border-almostBlack ml-[50px] `}
      >
        Register
      </button>
    </>
  );
}

export { Button, LoginButton };
