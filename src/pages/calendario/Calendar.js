import * as React from 'react';
import Paper from "@mui/material/Paper";
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';

import appointments from './demo-data/month-appointments';

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: appointments,
    };
  }

  render() {
    const { data } = this.state;

    return (
      <Container maxWidth="lg" sx={{minHeight: 530,}}>
        <Paper>
        <Typography sx={{textAlign: 'center', fontSize: 30, fontFamily: 'Arial' }}>Calendario</Typography>
        <Scheduler
          data={data}
        >
          <ViewState
            defaultCurrentDate="2018-07-27"
          />
          <MonthView />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments />
        </Scheduler>
      </Paper>
      </Container>
    );
  }
}