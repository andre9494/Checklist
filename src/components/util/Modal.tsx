import { Modal, View } from "react-native";
import { COLORS } from "../../../styles";
import Container from "../../layouts/Container";
import PageContainer from "../../layouts/PageContainer";
import CenteredContainer from "../../layouts/CenteredContainer";
const ModalComponent = (props: {
  children: JSX.Element;
  showModalState: {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  };
}) => {
  const { children } = props;
  const { showModal, setShowModal } = props.showModalState;

  return (
    <Modal
      animationType="slide"
      visible={showModal}
      transparent={true}
      onRequestClose={() => {
        setShowModal(false);
      }}
    >
      <PageContainer
        style={{
          backgroundColor: COLORS.squareGreen,
          marginHorizontal: 0,
          marginVertical: 30,
          borderRadius: 30,
          height: "100%",
        }}
      >
        <CenteredContainer>
          <View>{children}</View>
        </CenteredContainer>
      </PageContainer>
      <View
        style={{
          backgroundColor: COLORS.squareGreen,
        }}
      >
        {children}
      </View>
    </Modal>
  );
};

export default ModalComponent;
