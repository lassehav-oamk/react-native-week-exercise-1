import { render } from '@testing-library/react-native';
import TransactionConfirmation from '../components/TransactionConfirmation';

jest.mock('../assets/send.png', () => 'send.png');
jest.mock('../assets/user.png', () => 'user.png');

describe('TransactionConfirmation', () => {   
    it('renders confirmation text and recipient name', () => {
        const { getByText } = render(<TransactionConfirmation />);
        
        expect(getByText('Sent successfully to')).toBeTruthy();
        expect(getByText('Lela Crawford')).toBeTruthy();
    });

    it('displays the transaction amount', () => {
        const { getByText } = render(<TransactionConfirmation />);
        
        expect(getByText('$100.00')).toBeTruthy();
    });

    it('shows recipient details', () => {
        const { getByText } = render(<TransactionConfirmation />);
        
        expect(getByText('John Crawford')).toBeTruthy();
        expect(getByText('john123@gmail.com')).toBeTruthy();
    });

    it('displays transaction details', () => {
        const { getByText } = render(<TransactionConfirmation />);
        
        expect(getByText(/Transaction done on 12 January 2018/)).toBeTruthy();
        expect(getByText(/83452930/)).toBeTruthy();
    });

    it('renders the Continue button', () => {
        const { getByText } = render(<TransactionConfirmation />);
        
        expect(getByText('Continue')).toBeTruthy();
    });
})