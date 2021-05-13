export const forwardPagination = (props) => {
  if (props.page < props.resultsPages) {
    props.adminAccessSetPage(props.page + 1);
  }
};

export const backwardPagination = (props) => {
  if (props.page >= 1) {
    props.adminAccessSetPage(props.page - 1);
  }
};

export const jumpToPage = (props, selectedPage) => {
  props.adminAccessSetPage(selectedPage - 1);
};
