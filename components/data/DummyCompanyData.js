import Overview from '../models/CompanyOverview';
import salon1 from '../../assets/images/place-A1.png';
import salon2 from '../../assets/images/place-A2.png';
import salon3 from '../../assets/images/place-A5.png';
import salon4 from '../../assets/images/place-A4.png';
import heartfill from '../../assets/icons/white_heart_fill.png';

export const COMPANYDATA = [
  new Overview(
    1,
    'Majesty Nail Bar',
    salon1,
    'Experience luxury and pampering at our chic nail salon that offers a wide range of nail services for any occasion.',
    4.5,
    ['Manicure', 'Pedicure', 'Nail Art'],
    ['Sarah', 'Emily', 'Alex'],
    ['9:00 AM', '11:00 AM', '1:00 PM'],
    ['30 minutes', '30 minutes', '1 hour'],
    ['$40', '$40', '$75'],
    heartfill,
  ),
  new Overview(
    2,
    'Serenity Spa',
    salon2,
    'Relax, rejuvenate, and unwind with our personalized spa treatments designed to melt away stress and leave you feeling refreshed.',
    4.0,
    ['Facial', 'Massage', 'Body Treatment'],
    ['Jessica', 'Bella', 'John'],
    ['10:00 AM', '12:45 PM', '2:30 PM'],
    ['30 minutes', '1 hour', '2 hours'],
    ['$50', '$75', '$225'],
    heartfill,
  ),
  new Overview(
    3,
    'Skin Medical Inc.',
    salon3,
    'Our medical aesthetics team offers a variety of advanced skin treatments, customized to meet the unique needs of each client.',
    4.3,
    ['Hydra Facial', 'PRP', 'Cool Peel'],
    ['Sae Eun', 'Alyssa', 'Rachel'],
    ['10:30 AM', '12:15 PM', '2:55 PM'],
    ['1 hour', '1 hour', '45 minutes'],
    ['$150', '$425', '$425'],
    heartfill,
  ),
  new Overview(
    4,
    "Vito's Restaurant",
    salon4,
    "Enjoy an unforgettable dining experience at Vito's Restaurant, where every dish is a surprise and every visit is a new adventure.",
    4.3,
    ['Facial', 'Massage', 'Back Breaking'],
    ['Vito'],
    ['12:30 AM', '1:15 AM', '2:55 AM'],
    ['15 minutes', '25 minutes', '1 hour'],
    ['$0', '$0', '$0'],
    heartfill,
  ),
];
