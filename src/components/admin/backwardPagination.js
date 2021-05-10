export const backwardPagination = (props) => {
  if (props.page >= 1) {
    props.adminAccessSetPage(props.page - 1);
  }
};
