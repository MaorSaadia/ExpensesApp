import { Text, View, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../../constants/styles';
import { getFormattedDate } from '../../util/date';

function ExpenseItem({ id, description, amount, date }) {
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate('ManageExpense', {
      expenseId: id,
    });
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
      // android_ripple={{
      //   color: GlobalStyles.colors.primary700,
      // }}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.9,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: GlobalStyles.colors.accent500,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 90,
  },
  amount: {
    color: GlobalStyles.colors.primary400,
    fontWeight: 'bold',
  },
});
