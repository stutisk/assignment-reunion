import { Link } from "react-router-dom";
const Mainpage = () => {
  // return function y() {
  //   var a = 2;
  //   function x() {
  //     console.log(a);
  //   }
  //   x();
  // }

  return (
    <div>
      <div className="mainText icon-color text-center">ESTATERY</div>
      <div className="secondryText text-center">Find it. Tour it. Own it.</div>
      <div className="text-center margin-top">
        {" "}
        <Link
          to="/rent"
          className={`btn-padding pointer border-radius1 btn-primary font-bolder `}
        >
          Rent Home
        </Link>
      </div>
    </div>
  );
};
export { Mainpage };
