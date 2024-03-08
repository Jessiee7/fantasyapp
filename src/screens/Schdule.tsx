import {
  Alert,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {colors} from '../theme/colors';
import TextInputComp from '../components/TextInputComp';
import {getHeight, getRandomId, getWidth, width} from '../utils/utilities';
import {global_styles} from '../theme/styles.global';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import ButtonComp from '../components/ButtonComp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {keys} from '../utils/keys';
const Schdule = () => {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({date: '', startTime: '', endTime: ''});
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isStartTimeVisible, setIsStartTimeVisible] = useState(false);
  const [isEndTimeVisible, setIsEndTimeVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const hideStartTImePicker = () => {
    setIsStartTimeVisible(false);
  };
  const hideEndTimePicker = () => {
    setIsEndTimeVisible(false);
  };
  const showStartTImePicker = () => {
    setIsStartTimeVisible(true);
  };
  const showEndTimePicker = () => {
    setIsEndTimeVisible(true);
  };

  const handleConfirm = (date: Date) => {
    hideDatePicker();
    setDate(date);
  };
  const handleConfirmStartTime = (time: Date) => {
    hideStartTImePicker();
    setStartTime(moment(time).format('HH:MM A'));
  };
  const handleConfirmEndTime = (time: Date) => {
    hideEndTimePicker();
    setEndTime(moment(time).format('HH:MM A'));
  };
  const onSubmit = async () => {
    if (startTime == '') {
      Alert.alert('Please select start time');
      return;
    }
    if (endTime == '') {
      Alert.alert('Please select end time');
      return;
    }
    if (name == '') {
      Alert.alert('Please add name');
      return;
    }

    const new_shadule = {
      id: getRandomId(),
      date: moment(date).format('DD/MM/YYYY'),
      startTime: startTime,
      endTime: endTime,
      name: name,
    };
    await AsyncStorage.getItem(keys.SCHEDULE).then(async res => {
      if (res != null) {
        const shedules_data = JSON.parse(res);
        shedules_data.push(new_shadule);
        await AsyncStorage.setItem(
          keys.SCHEDULE,
          JSON.stringify(shedules_data),
        );
      } else {
        const shedules_data = [new_shadule];
        await AsyncStorage.setItem(
          keys.SCHEDULE,
          JSON.stringify(shedules_data),
        );
      }
    });
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: getWidth(10),
          paddingVertical: getHeight(20),
        }}>
        <Text style={global_styles.headingText}>{'Match Name'}</Text>
        <TextInputComp
          value={name}
          onChangeText={text => {
            setName(text);
          }}
          maxLength={30}
        />
        <Text style={global_styles.headingText}>{'Date:'}</Text>
        <TouchableOpacity style={styles.date} onPress={showDatePicker}>
          <Text style={global_styles.subHedingText}>{date.toDateString()}</Text>
        </TouchableOpacity>

        <Text style={global_styles.headingText}>{'Start Time:'}</Text>
        <TouchableOpacity style={styles.date} onPress={showStartTImePicker}>
          <Text style={global_styles.subHedingText}>{startTime}</Text>
        </TouchableOpacity>
        <Text style={global_styles.headingText}>{'End Time:'}</Text>
        <TouchableOpacity style={styles.date} onPress={showEndTimePicker}>
          <Text style={global_styles.subHedingText}>{endTime}</Text>
        </TouchableOpacity>
        <View style={{marginTop: getHeight(20)}}>
          <ButtonComp titleText="Save Details" onPress={onSubmit} />
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />

        <DateTimePickerModal
          isVisible={isStartTimeVisible}
          mode="time"
          onConfirm={handleConfirmStartTime}
          onCancel={hideStartTImePicker}
        />

        <DateTimePickerModal
          isVisible={isEndTimeVisible}
          mode="time"
          onConfirm={handleConfirmEndTime}
          onCancel={hideEndTimePicker}
        />
      </View>
    </View>
  );
};

export default Schdule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  date: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.GRAY_BORDER,
    height: getHeight(46),
    flexDirection: 'row',
    marginVertical: getHeight(10),
    alignItems: 'center',
    paddingStart: getWidth(10),
  },
});
