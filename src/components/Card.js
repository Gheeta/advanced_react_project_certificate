import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <div className="card">
      <Image className="img" src={imageSrc} />
      <div className="card_padding">
        <Heading>{title}</Heading>
        <Text className="text">{description}</Text>
        <div>
          <span>See More </span>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </div>
      </div>
    </div>
  );
};

export default Card;
