import React from "react";
import Button from "../common/Button/Button";
import PaddingContainer from "../common/PaddingContainer/PaddingContainer";

type Props = {};

export default function AnyQuestion({}: Props) {
  return (
    <PaddingContainer>
      <div className="my-16 font-poppins">
        <h1 className="text-xl font-bold text-forest-green">Any Question??</h1>
        <p className="my-6 text-forest-green">
          I'd be happy to help you with any questions you have about technology
          or games. Just ask your question and I'll do my best to provide a
          helpful and accurate response.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=6288239970540&text=Hey%20Bro"
          target="_blank"
        >
          <Button background="moss" rounded="lg" className="text-white">
            Lets Get a Talk!
          </Button>
        </a>
      </div>
    </PaddingContainer>
  );
}
