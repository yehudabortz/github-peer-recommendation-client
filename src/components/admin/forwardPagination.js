export const forwardPagination = (props) => {
  if (props.page < props.resultsPages) {
    props.adminAccessSetPage(props.page + 1);
  }
};
