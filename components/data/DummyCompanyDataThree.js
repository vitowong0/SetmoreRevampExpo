import Overview from '../models/CompanyOverview';
import salon1 from '../../assets/images/place-B1.png';
import salon2 from '../../assets/images/place-B2.png';
import salon3 from '../../assets/images/place-B3.png';
import salon4 from '../../assets/images/place-B4.png';
import heartoutline from '../../assets/icons/white_heart_outline.png';

export const COMPANYDATATHREE = [
  new Overview(
    1,
    'Black Widow Inc.',
    salon1,
    'A high-end fashion line that specializes in all-black clothing with a seductive edge.',
    4.5,
    ['Manicure', 'Pedicure', 'Nail Art'],
    ['Sarah', 'Emily', 'Alex'],
    ['9:00 AM', '11:00 AM', '1:00 PM'],
    ['30 minutes', '30 minutes', '1 hour'],
    ['$40', '$40', '$75'],
    heartoutline,
  ),
  new Overview(
    2,
    'Dreamy Nights Ltd.',
    salon2,
    "A brand that offers high-quality sleepwear, from silk robes to satin pajamas, for a comfortable and stylish night's sleep.",
    4.0,
    ['Facial', 'Massage', 'Body Treatment'],
    ['Jessica', 'Bella', 'John'],
    ['10:00 AM', '12:45 PM', '2:30 PM'],
    ['30 minutes', '1 hour', '2 hours'],
    ['$50', '$75', '$225'],
    heartoutline,
  ),
  new Overview(
    3,
    'Temptation Lounge',
    salon3,
    'An exclusive club where patrons can indulge in their desires in a discreet and sophisticated atmosphere.',
    4.3,
    ['Hydra Facial', 'PRP', 'Cool Peel'],
    ['Sae Eun', 'Alyssa', 'Rachel'],
    ['10:30 AM', '12:15 PM', '2:55 PM'],
    ['1 hour', '1 hour', '45 minutes'],
    ['$150', '$425', '$425'],
    heartoutline,
  ),
  new Overview(
    4,
    'Raven & Rose Inc.',
    salon4,
    'A fashion brand that combines dark and romantic elements to create elegant and mysterious clothing.',
    4.3,
    ['Facial', 'Massage', 'Back Breaking'],
    ['Vito'],
    ['12:30 AM', '1:15 AM', '2:55 AM'],
    ['15 minutes', '25 minutes', '1 hour'],
    ['$0', '$0', '$0'],
    heartoutline,
  ),
];
