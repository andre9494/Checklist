import { Text } from "react-native";

import ModalComponent from "../components/util/Modal";

const Details = (props: {
  showModalState: {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  };
}) => {
  const { showModalState } = props;
  return (
    <ModalComponent
      showModalState={showModalState}
    >
      <Text>buenas</Text>
    </ModalComponent>
  );
};

export default Details;