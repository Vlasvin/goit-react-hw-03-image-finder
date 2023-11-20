import { BtnLoadMore } from 'components/Button/Button.styled';

export const Button = ({ onClick = null }) => {
  return (
    <BtnLoadMore onClick={onClick} type="button">
      Load More
    </BtnLoadMore>
  );
};
