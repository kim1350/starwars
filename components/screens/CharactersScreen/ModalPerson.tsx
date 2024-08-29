import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Dispatch, FC, SetStateAction} from 'react';
import Modal from 'react-native-modal';
import {colors, stylesConst} from '../../../constants';
import {Person} from '../../../types/Person';

interface ModalProps {
  item: Person | null;
  isVisible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}
const ModalPerson: FC<ModalProps> = ({item, isVisible, setVisible}) => {
  const hideModal = () => {
    setVisible(false);
  };
  const genderUrl = {
    male: require('../../../assets/Male.png'),
    female: require('../../../assets/Female.png'),
    hermaphrodite: require('../../../assets/Alien.png'),
  };
  const genderColor = {
    male: colors.GREEN,
    female: colors.PURPLE,
    hermaphrodite: colors.YELLOW,
  };
  console.log(item?.gender);
  console.log(genderUrl[item?.gender as keyof typeof genderUrl]);
  return (
    <Modal
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
      hideModalContentWhileAnimating={true}
      animationOutTiming={250}
      isVisible={isVisible}
      backdropOpacity={0.5}
      style={styles.modalStyle}
      onBackButtonPress={hideModal}
      onBackdropPress={hideModal}>
      <View style={styles.modal}>
        <View style={styles.modalContainer}>
          <View style={styles.cont1}>
            {item?.gender &&
              !['n/a', 'unknown', 'none'].includes(item?.gender) && (
                <Image
                  source={genderUrl[item?.gender as keyof typeof genderUrl]}
                  style={{
                    width: 160,
                    height: 160,
                  }}
                  width={160}
                  height={160}
                />
              )}
            <View style={styles.tagContainer}>
              {item?.gender &&
                !['n/a', 'unknown', 'none'].includes(item?.gender) && (
                  <View
                    style={{
                      ...styles.genderContainer,
                      backgroundColor:
                        genderColor[item.gender as keyof typeof genderColor],
                    }}>
                    <Text>{item.gender}</Text>
                  </View>
                )}
              {item?.birth_year &&
                !['n/a', 'unknown', 'none'].includes(item?.birth_year) && (
                  <View
                    style={{
                      ...styles.genderContainer,
                      backgroundColor: colors.BLUE,
                    }}>
                    <Text>{item?.birth_year}</Text>
                  </View>
                )}
            </View>
          </View>

          <View style={styles.cont2}>
            <Text style={styles.title}>{item?.name}</Text>
            <View style={styles.cont3}>
              <Text style={styles.text}>hair color {item?.hair_color}</Text>
              <Text style={styles.text}>Eye color {item?.eye_color}</Text>
              <Text style={styles.text}>Skin color {item?.skin_color}</Text>
            </View>
            <View style={styles.cont4}>
              {item?.height &&
                !['n/a', 'unknown', 'none'].includes(item?.height) && (
                  <View style={styles.hmCont}>
                    <View style={styles.round}>
                      <Text>{item?.height}</Text>
                    </View>
                    <Text>height</Text>
                  </View>
                )}
              {item?.mass &&
                !['n/a', 'unknown', 'none'].includes(item?.mass) && (
                  <View style={styles.hmCont}>
                    <View style={styles.round}>
                      <Text>{item?.mass}</Text>
                    </View>
                    <Text>mass</Text>
                  </View>
                )}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalPerson;

const styles = StyleSheet.create({
  title: {
    ...stylesConst.text_title_18m,
    color: colors.WHITE,
  },
  cont4: {
    flexDirection: 'row',
    gap: 12,
  },
  text: {
    ...stylesConst.text_title_16m,
  },
  modalStyle: {
    margin: 0,
    flex: 1,
  },
  hmCont: {
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.WHITE,
  },
  cont3: {
    padding: 8,
    gap: 4,
    borderRadius: 8,
    backgroundColor: colors.WHITE,
  },
  cont2: {
    flex: 1,
    backgroundColor: colors.BLUE_DARK2,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,

    gap: 12,
  },
  cont1: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.BLUE_DARK,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,

    gap: 12,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalContainer: {
    flexDirection: 'row',

    borderRadius: 16,
  },
  modal: {
    justifyContent: 'center',
    padding: 12,
  },

  cancelText: {
    ...stylesConst.text_title_16m,
    color: colors.ORANGE,
  },
  personItem: {
    flex: 1,
    gap: 12,
    backgroundColor: colors.BG2,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  tagContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  genderContainer: {
    borderRadius: 12,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
  },
  round: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 4,
    borderColor: colors.BLACK21,
  },
});
