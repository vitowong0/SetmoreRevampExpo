import Overview from '../models/CompanyOverview';
import salon1 from '../../assets/images/place-C1.png';
import salon2 from '../../assets/images/place-C2.png';
import salon3 from '../../assets/images/place-C3.png';
import salon4 from '../../assets/images/place-C4.png';
import heartoutline from '../../assets/icons/white_heart_outline.png';

export const COMPANYDATAFOUR = [
  new Overview(
    1,
    'Fifth Avenue Fashions',
    salon1,
    'A sophisticated clothing store that features elegant and timeless pieces for the modern woman.',
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
    'Soho Style Inc. ',
    salon2,
    'A trendy boutique that offers the latest fashion and accessories from up-and-coming designers.',
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
    'Manhattan Mavens',
    salon3,
    'A personal styling service that caters to busy professionals looking to elevate their wardrobe.',
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
    'Central Park Chic',
    salon4,
    'A luxury lifestyle brand that offers high-end home decor, accessories, and clothing for the refined individual.',
    4.3,
    ['Facial', 'Massage', 'Back Breaking'],
    ['Vito'],
    ['12:30 AM', '1:15 AM', '2:55 AM'],
    ['15 minutes', '25 minutes', '1 hour'],
    ['$0', '$0', '$0'],
    heartoutline,
  ),
];
