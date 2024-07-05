import React, { createContext, useContext, useRef, useState } from "react";
import FileInput from "./FileInput";
import styled from "styled-components";

const StyledImgBox = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  border: 1px dashed var(--color-grey-200);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.3rem;
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border: 2px dashed var(--color-grey-200);

  cursor: pointer;
`;

const InputContext = createContext();
const ImageBox = ({
  width = "352",
  height = "352",
  register,
  id,
  children,
}) => {
  const [image, setImage] = useState();
  const ImageRef = useRef(null);
  function handleImageClick() {
    ImageRef.current.click();
  }
  return (
    <InputContext.Provider value={{ ImageRef, image, setImage, register, id }}>
      <StyledImgBox width={width} height={height} onClick={handleImageClick}>
        {children}
      </StyledImgBox>
    </InputContext.Provider>
  );
};
const BoxImage = () => {
  const { image } = useContext(InputContext);
  return <Img src={image ? URL.createObjectURL(image) : null} alt="" />;
};

const ImgInput = () => {
  const { setImage, ImageRef, register, id } = useContext(InputContext);

  const {
    ref,
    onChange: registerOnChange,
    ...rest
  } = register(id, {
    required: "This field is required",
  });

  function handleUploadImage(e) {
    setImage(e.target.files[0]);
    registerOnChange(e);
  }
  return (
    <FileInput
      ref={(e) => {
        ImageRef.current = e;
        ref(e);
      }}
      onChange={handleUploadImage}
      style={{ display: "none" }}
      id={id}
      accept="image/*"
      {...rest}
    />
  );
};

ImageBox.Img = BoxImage;
ImageBox.ImgInput = ImgInput;

export default ImageBox;
