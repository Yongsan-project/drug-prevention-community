import Image, { StaticImageData } from "next/image";
import Main from "/public/images/drug.png";
import styled from "styled-components";

interface ImageProps {
  width: string;
  height: string;
  source: StaticImageData;
  altContent: string;
}

const ImageAtom = ({ width, height, source, altContent }: ImageProps) => {
  return (
    <div>
      <StyledImg
        src={source}
        alt={altContent}
        priority={true}
        styles={{ width, height }}
      />
    </div>
  );
};

const StyledImg = styled(Image)<{ styles: { width: string; height: string } }>`
  width: ${(props) => props.styles.width};
  height: ${(props) => props.styles.height};

  @media (max-width: 600px) {
    height: ${(props) => `calc(${props.styles.height} / 2);`};
  }
`;

export default ImageAtom;
