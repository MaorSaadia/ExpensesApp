import { StyleSheet, View } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'Air Jordan',
    amount: 175.99,
    date: new Date('06-07-2023'),
  },
  {
    id: 'e2',
    description: 'Galaxy Flip',
    amount: 899.99,
    date: new Date('28-07-2023'),
  },
  {
    id: 'e3',
    description: 'Pizza',
    amount: 14.99,
    date: new Date('21-07-2022'),
  },
  {
    id: 'e4',
    description: 'Book',
    amount: 24.99,
    date: new Date('10-11-2022'),
  },
  {
    id: 'e5',
    description: 'Jeans Pants',
    amount: 29.99,
    date: new Date('22-07-2023'),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    //backgroundColor: GlobalStyles.colors.primary50,
  },
});
