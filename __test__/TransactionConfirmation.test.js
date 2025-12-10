import { render } from '@testing-library/react-native';
import { StyleSheet } from 'react-native';
import TransactionConfirmation from '../components/TransactionConfirmation';

jest.mock('../assets/send.png', () => 'send.png');
jest.mock('../assets/user.png', () => 'user.png');
jest.mock('expo-linear-gradient', () => ({
  LinearGradient: 'LinearGradient',
}));

// Helper function to flatten styles
const getFlattenedStyle = (element) => {
  const style = element.props.style;
  return StyleSheet.flatten(style) || {};
};

// Helper function to normalize color (case-insensitive hex comparison)
const normalizeColor = (color) => {
  if (typeof color === 'string') {
    return color.toLowerCase().trim();
  }
  return color;
};

// Helper function to normalize font weight
const normalizeFontWeight = (weight) => {
  if (weight === 'bold' || weight === '700' || weight === 700) {
    return 700;
  }
  if (weight === 'semibold' || weight === '600' || weight === 600) {
    return 600;
  }
  if (weight === 'normal' || weight === '400' || weight === 400) {
    return 400;
  }
  return weight;
};

// Helper function to check if font size is within tolerance
const isWithinTolerance = (actual, expected, tolerance) => {
  return Math.abs(actual - expected) <= tolerance;
};

describe('TransactionConfirmation', () => {

  // ===== 1. STRUCTURAL TESTS (testIDs) =====
  describe('Required testIDs', () => {
    it('should have paymentSuccessScreen testID', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      expect(getByTestId('paymentSuccessScreen')).toBeTruthy();
    });

    it('should have successMessage testID', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      expect(getByTestId('successMessage')).toBeTruthy();
    });

    it('should have amountText testID', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      expect(getByTestId('amountText')).toBeTruthy();
    });

    it('should have profileName testID', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      expect(getByTestId('profileName')).toBeTruthy();
    });

    it('should have profileEmail testID', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      expect(getByTestId('profileEmail')).toBeTruthy();
    });

    it('should have transactionDate testID', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      expect(getByTestId('transactionDate')).toBeTruthy();
    });

    it('should have referenceNumber testID', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      expect(getByTestId('referenceNumber')).toBeTruthy();
    });

    it('should have continueButton testID', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      expect(getByTestId('continueButton')).toBeTruthy();
    });

    it('should have buttonText testID', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      expect(getByTestId('buttonText')).toBeTruthy();
    });
  });

  // ===== 2. COLOR ACCURACY TESTS =====
  describe('Color Accuracy', () => {
    it('should have correct screen background color (#5F9B9E)', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      const screen = getByTestId('paymentSuccessScreen');
      const style = getFlattenedStyle(screen);
      expect(normalizeColor(style.backgroundColor)).toBe('#5f9b9e');
    });

    it('should have correct card background color (#FFFFFF)', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      const screen = getByTestId('paymentSuccessScreen');

      // Find the white card container (usually a child View with white background)
      // This test looks for any white background in the component
      const allElements = screen.findAllByType('View', { deep: true });
      const hasWhiteCard = allElements.some(element => {
        const style = getFlattenedStyle(element);
        return normalizeColor(style.backgroundColor) === '#ffffff' ||
               normalizeColor(style.backgroundColor) === '#fff' ||
               normalizeColor(style.backgroundColor) === 'white';
      });

      expect(hasWhiteCard).toBe(true);
    });

    it('should have correct amount text color (#2C7A7B)', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      const amountText = getByTestId('amountText');
      const style = getFlattenedStyle(amountText);
      expect(normalizeColor(style.color)).toBe('#2c7a7b');
    });

    it('should have correct profile name color (#2D3748)', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      const profileName = getByTestId('profileName');
      const style = getFlattenedStyle(profileName);
      expect(normalizeColor(style.color)).toBe('#2d3748');
    });

    it('should have correct success message color (#718096)', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      const successMessage = getByTestId('successMessage');
      const style = getFlattenedStyle(successMessage);
      expect(normalizeColor(style.color)).toBe('#718096');
    });

    it('should have correct transaction details color (#A0AEC0)', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      const transactionDate = getByTestId('transactionDate');
      const style = getFlattenedStyle(transactionDate);
      expect(normalizeColor(style.color)).toBe('#a0aec0');

      const referenceNumber = getByTestId('referenceNumber');
      const refStyle = getFlattenedStyle(referenceNumber);
      expect(normalizeColor(refStyle.color)).toBe('#a0aec0');
    });

    it('should have correct button text color (#FFFFFF)', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      const buttonText = getByTestId('buttonText');
      const style = getFlattenedStyle(buttonText);
      const color = normalizeColor(style.color);
      expect(color === '#ffffff' || color === '#fff' || color === 'white').toBe(true);
    });
  });

  // ===== 3. TYPOGRAPHY SIZE TESTS =====
  describe('Typography Sizes', () => {
    it('should have correct amount font size (48px ±2px)', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      const amountText = getByTestId('amountText');
      const style = getFlattenedStyle(amountText);
      expect(isWithinTolerance(style.fontSize, 48, 2)).toBe(true);
    });

    it('should have correct profile name font size (17px ±1px)', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      const profileName = getByTestId('profileName');
      const style = getFlattenedStyle(profileName);
      expect(isWithinTolerance(style.fontSize, 17, 1)).toBe(true);
    });

    it('should have correct button text font size (18px ±1px)', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      const buttonText = getByTestId('buttonText');
      const style = getFlattenedStyle(buttonText);
      expect(isWithinTolerance(style.fontSize, 18, 1)).toBe(true);
    });

    it('should have correct success message font size (15px ±1px)', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      const successMessage = getByTestId('successMessage');
      const style = getFlattenedStyle(successMessage);
      expect(isWithinTolerance(style.fontSize, 15, 1)).toBe(true);
    });

    it('should have correct profile email font size (14px ±1px)', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      const profileEmail = getByTestId('profileEmail');
      const style = getFlattenedStyle(profileEmail);
      expect(isWithinTolerance(style.fontSize, 14, 1)).toBe(true);
    });

    it('should have correct transaction details font size (13px ±1px)', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      const transactionDate = getByTestId('transactionDate');
      const style = getFlattenedStyle(transactionDate);
      expect(isWithinTolerance(style.fontSize, 13, 1)).toBe(true);

      const referenceNumber = getByTestId('referenceNumber');
      const refStyle = getFlattenedStyle(referenceNumber);
      expect(isWithinTolerance(refStyle.fontSize, 13, 1)).toBe(true);
    });
  });

  // ===== 4. TYPOGRAPHY WEIGHT TESTS =====
  describe('Typography Weights', () => {
    it('should have bold amount text (700)', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      const amountText = getByTestId('amountText');
      const style = getFlattenedStyle(amountText);
      expect(normalizeFontWeight(style.fontWeight)).toBe(700);
    });

    it('should have semibold profile name (600)', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      const profileName = getByTestId('profileName');
      const style = getFlattenedStyle(profileName);
      expect(normalizeFontWeight(style.fontWeight)).toBe(600);
    });

    it('should have semibold button text (600)', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      const buttonText = getByTestId('buttonText');
      const style = getFlattenedStyle(buttonText);
      expect(normalizeFontWeight(style.fontWeight)).toBe(600);
    });
  });

  // ===== 5. CONTENT ACCURACY TESTS =====
  describe('Content Accuracy', () => {
    it('should display correct success message', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      const successMessage = getByTestId('successMessage');
      expect(successMessage.props.children).toBe('Sent successfully to Lela Crawford');
    });

    it('should display correct amount ($100.00)', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      const amountText = getByTestId('amountText');
      expect(amountText.props.children).toBe('$100.00');
    });

    it('should display correct profile name (John Crawford)', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      const profileName = getByTestId('profileName');
      expect(profileName.props.children).toBe('John Crawford');
    });

    it('should display correct profile email (John123@gmail.com)', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      const profileEmail = getByTestId('profileEmail');
      expect(profileEmail.props.children).toBe('John123@gmail.com');
    });

    it('should display correct transaction date', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      const transactionDate = getByTestId('transactionDate');
      expect(transactionDate.props.children).toBe('Transaction done on 12 January 2018.');
    });

    it('should display correct reference number (03492390)', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      const referenceNumber = getByTestId('referenceNumber');
      expect(referenceNumber.props.children).toContain('03492390');
    });

    it('should display correct button text (Continue)', () => {
      const { getByTestId } = render(<TransactionConfirmation />);
      const buttonText = getByTestId('buttonText');
      expect(buttonText.props.children).toBe('Continue');
    });
  });
});
