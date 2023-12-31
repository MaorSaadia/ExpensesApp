import { StyleSheet, Text, TextInput, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function Input({ label, invalid, style, textInputConfig }) {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.inavalidInput);
  }

  return (
    <View style={(styles.inputContainer, style)}>
      <Text style={[styles.label, invalid && styles.inavalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 10,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary700,
    marginBottom: 4,
    marginTop: 6,
    marginHorizontal: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary200,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    marginHorizontal: 4,
  },
  inputMultiline: {
    minHeight: 80,
    textAlignVertical: 'top',
    marginBottom: 12,
    marginHorizontal: 4,
  },
  inavalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  inavalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});
