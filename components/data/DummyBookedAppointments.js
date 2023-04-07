import Overview from '../models/BookedAppointmentsOverview';

import apt1 from '../../assets/images/place-C1.png';
import apt2 from '../../assets/images/place-B2.png';
import apt3 from '../../assets/images//capy.png';
import apt4 from '../../assets/images/pottery.png';

export const BOOKEDAPPOINTMENTS = [
  new Overview(1, 'The Xiao', 'April 7, 2023', '2:00 AM', apt1),
  new Overview(2, "Vito's Salon", 'April 8, 2023', '3:00 AM', apt2),
  new Overview(3, 'Capybara Land', 'April 20th, 2023', '1:00 PM', apt3),
  new Overview(4, 'Crock-A-Doodle', 'April 26th, 2023', '3:00 PM', apt4),
];
