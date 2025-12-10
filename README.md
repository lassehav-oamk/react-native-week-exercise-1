# React Native Assignment: Payment Success Screen

## Assignment Brief

Implement a static payment success screen in React Native based on the provided design mockup. This assignment tests your ability to translate a visual design into working code with accurate styling and typography.

Here is the design of the layout, which you need to implement:
![Design](exerciseinfo-assets\layout-objective.png)


**Duration:** 2-3 hours  
**Type:** Individual Assignment  
**Submission:** Single React Native component file

## Design Assets

- **Design Reference:** `layout-objective.png` (provided)
- **Screen Type:** Mobile payment confirmation screen

## Deliverables

Submit a single React Native component file named `TransactionConfirmation.js` that:

1. Renders the payment success screen matching the provided design
2. Includes all required testID attributes for automated validation
3. Uses exact color values, font sizes, and text content as specified
4. Is self-contained and executable in a standard React Native environment

## Technical Requirements

### Required Technologies
- React Native (latest stable version)
- StyleSheet API for styling
- expo-linear-gradient or react-native-linear-gradient (for button gradient)

### Component Structure

Your component must include these elements with corresponding testIDs:

| Element | testID | Purpose |
|---------|--------|---------|
| Container | `paymentSuccessScreen` | Main screen container |
| Success message | `successMessage` | Confirmation text |
| Amount display | `amountText` | Transaction amount |
| Sender name | `profileName` | User's name |
| Sender email | `profileEmail` | User's email |
| Transaction date | `transactionDate` | Date information |
| Reference number | `referenceNumber` | Transaction reference |
| Action button | `continueButton` | Continue button container |
| Button label | `buttonText` | Button text |

### Color Specifications

All color values must match exactly (case-insensitive):

| Element | Color Code | Usage |
|---------|------------|-------|
| Screen background | `#5F9B9E` | Main background |
| Card background | `#FFFFFF` | White content card |
| Amount text | `#2C7A7B` | Dollar amount color |
| Primary text | `#2D3748` | Profile name |
| Secondary text | `#718096` | Success message |
| Tertiary text | `#A0AEC0` | Transaction details |
| Button text | `#FFFFFF` | Continue button text |

### Typography Specifications

| Element | Font Size | Font Weight | Tolerance |
|---------|-----------|-------------|-----------|
| Success message | 15px | Normal | ±1px |
| Amount | 48px | Bold (700) | ±2px |
| Profile name | 17px | Semibold (600) | ±1px |
| Profile email | 14px | Normal | ±1px |
| Transaction details | 13px | Normal | ±1px |
| Button text | 18px | Semibold (600) | ±1px |

**Font Weight Values:** Accept `'700'`, `'bold'`, or `700` for bold. Accept `'600'`, `'semibold'`, or `600` for semibold.

### Content Requirements

Display the following text exactly as written (case-sensitive):

```
Success Message: "Sent successfully to Lela Crawford"
Amount: "$100.00"
Profile Name: "John Crawford"
Profile Email: "John123@gmail.com"
Transaction Date: "Transaction done on 12 January 2018."
Reference Number: "your reference number is 03492390"
Button Text: "Continue"
```

## Evaluation Criteria

Your submission will be evaluated using **automated tests**:

### Color Accuracy 
- Screen background color
- Card background color
- Amount text color
- Profile name color
- Success message color
- Transaction details color
- Button text color

### Typography Size 
- Amount font size (48px)
- Profile name font size (17px)
- Button text font size (18px)
- Success message font size (15px)
- Profile email font size (14px)
- Transaction details font size (13px)

### Typography Weight
- Amount font weight (bold/700)
- Profile name font weight (semibold/600)
- Button text font weight (semibold/600)

### Content Accuracy
- Amount text content
- Profile name content
- Profile email content
- Button text content

## Non-Evaluated Elements

The following aspects will **NOT** be tested but should still be implemented for visual completeness:

- Layout and spacing (margins, padding, positioning)
- Icon graphics (envelope, checkmark)
- Shadow and elevation effects
- Button gradient implementation
- Profile image/avatar
- Overall visual polish

**Note:** Focus on passing the automated tests first, then enhance visual appearance.

## Constraints & Guidelines

### Must Include
- All specified testID attributes
- Exact color hex codes (case-insensitive)
- Specified font sizes (within tolerance)
- Specified font weights
- Exact text content (case-sensitive)

### Must Not Include
- External API calls
- State management (useState, useReducer, etc.)
- Navigation functionality
- Animation effects
- User input handling

### Allowed
- Any standard React Native components
- StyleSheet.create() for styling
- Inline styles where appropriate
- LinearGradient component for button
- Placeholder images for profile picture
- Additional View containers for layout

## Submission Format

### File Structure
```
TransactionConfirmation.js (main component file)
```

### Export Format
```javascript
export default TransactionConfirmation;
```

### Import Requirements
Your component should be importable and renderable:
```javascript
import TransactionConfirmation from './TransactionConfirmation';
// Should render without props
<TransactionConfirmation />
```

## Testing Your Work

Before submission, verify:

1. **testIDs are present:** Check all 9 required testIDs are included
2. **Colors match:** Use color picker to verify hex codes
3. **Font sizes correct:** Check style definitions match specification
4. **Text content exact:** Copy-paste text from specification
5. **Component renders:** Test in Expo/React Native environment
6. **Tests pass:** Run provided automated tests

### Self-Check Command
```bash
# Run your component in simulator/emulator
npm start
# or
expo start
```



## Academic Integrity

- This is an individual assignment
- You may reference any required documentation
- Do not copy code from classmates
- Do not use AI code generation tools for the entire solution
- Document any external resources used in comments





