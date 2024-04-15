import styled from "styled-components";

export default function Form({ onAddPost }) {
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { title, content } = Object.fromEntries(formData);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const { url, width, height } = await response.json();

    onAddPost({
      title,
      content,
      image: { url, width, height },
    });
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="title">Title</StyledLabel>
      <StyledInput name="title" id="title" placeholder="Enter the post title" />
      <StyledLabel htmlFor="cover">Cover</StyledLabel>
      <StyledFileInput name="cover" id="cover" accept="image/*" required />
      <StyledLabel htmlFor="content">Content</StyledLabel>
      <StyledTextArea
        name="content"
        id="content"
        placeholder="Enter the post content"
      />
      <StyledButton type="submit">Create Post</StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const StyledLabel = styled.label`
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  padding: 8px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #0056b3;
    outline: none;
  }
`;

const StyledFileInput = styled(StyledInput).attrs({
  type: "file",
})`
  padding: 8px;
  border: none;
  &:focus {
    border-color: #0056b3;
    outline: none;
  }
`;

const StyledTextArea = styled.textarea`
  width: 300px;
  height: 100px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  &:focus {
    border-color: #0056b3;
    outline: none;
  }
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #0056b3;
  }
`;
