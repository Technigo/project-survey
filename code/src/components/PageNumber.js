const PageNumber = ({ pageIndex }) => {
  // This component is rendered with position absolute next to each label in order to show which page the user is on
  return (
    <div className="form-page-index">
      {pageIndex}
      <img
        className="arrow-right"
        src="./assets/zondicons/arrow-thin-right.svg"
        alt="arrow right"
      />
    </div>
  );
};

export default PageNumber;
