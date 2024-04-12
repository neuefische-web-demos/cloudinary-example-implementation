import Image from "next/image";
import styled from "styled-components";

export default function PostList({ posts }) {
  return !posts.length ? (
    "No posts yet."
  ) : (
    <StyledContainer>
      <p>Those are some fake blog posts</p>
      <ul>
        {posts.map(({ _id, title, content, images }) => (
          <StyledListItem key={_id}>
            <h3>{title}</h3>
            {images.map((image) => {
              return (
                <StyledImageWrapper>
                  <StyledImage
                    alt={`image of ${title}`}
                    src={image.url}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </StyledImageWrapper>
              );
            })}
            <p>{content}</p>
          </StyledListItem>
        ))}
      </ul>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StyledListItem = styled.li`
  width: 80vw;
  max-width: 500px;
  margin: 10px 0;
  list-style-type: none;
`;

const StyledImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
