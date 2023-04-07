import Overview from '../models/NotificationOverview';

import hairSalon from '../../assets/images/hairSalon.png';
import capy from '../../assets/images/capy.png';
import pottery from '../../assets/images/pottery.png';
import bakery from '../../assets/images/bakery.png';
import nailBar from '../../assets/images/nailBar.png';

export const NOTIFICATIONSDATA = [
  new Overview(
    1,
    hairSalon,
    'Mochi Hair Co.',
    'Book with Margie and receive 20% off',
    '4:00 PM',
  ),

  new Overview(
    2,
    capy,
    'Capybara Petting',
    'Kids Admission FREE on Tuesdays',
    '7:00 PM',
  ),
  new Overview(
    3,
    pottery,
    'Takashis Pottery',
    'Booked: Apr 1, 2023, 1:30 PM Confirmation code: C4PY193$',
    '3:00 AM',
  ),
  new Overview(
    4,
    bakery,
    'Pastry Alchemist',
    'Cake Decorating Class Tomorrow',
    '6:00 AM',
  ),
  new Overview(
    5,
    nailBar,
    'Nail Bar',
    'Upcoming GelX appointment in 3 days',
    '10:00 AM',
  ),
];
