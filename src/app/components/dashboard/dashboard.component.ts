import { Component, OnInit } from '@angular/core';

import { moveIn } from '../../router.animations';
import { LocalStorageService } from '../../services/localstorage-service';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [moveIn()],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@moveIn]': '' }
})
export class DashboardComponent implements OnInit {
  loading = true;
  listData = new Array(3).fill({}).map((i, index) => {
    return {
      href: 'http://ng.ant.design',
      title: `Design part ${index}`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      // tslint:disable-next-line:max-line-length
      content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    };
  });


  constructor(private notification: NzNotificationService) {
  }

  ngOnInit(): void {
  }

  createNotification(type: string): void {
    this.notification.create(type, 'Notification Title',
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
  }

  formatOne = percent => `${percent} Days`;
  formatTwo = () => `Done`;
  formatThree = users => `${users} Users`;
}
