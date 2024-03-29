import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';



import { ListingPage } from '../pages/listing/listing';
// import { FeedPage } from '../pages/feed/feed';
// import { FollowersPage } from '../pages/followers/followers';
// import { LayoutsPage } from '../pages/layouts/layouts';
// import { FormsPage } from '../pages/forms/forms';
import { LoginPage } from '../pages/login/login';
// import { NotificationsPage } from '../pages/notifications/notifications';
import { ProfilePage } from '../pages/profile/profile';
import { TabsNavigationPage } from '../pages/tabs-navigation/tabs-navigation';
import { WalkthroughPage } from '../pages/walkthrough/walkthrough';
import { SettingsPage } from '../pages/settings/settings';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
// import { SchedulePage } from '../pages/schedule/schedule';
// import { List1Page } from '../pages/list-1/list-1';
// import { List2Page } from '../pages/list-2/list-2';
// import { GridPage } from '../pages/grid/grid';
// import { FormLayoutPage } from '../pages/form-layout/form-layout';

import { SignatureForm } from '../pages/signatureForm/signature-form';
import { SignatureForm2 } from '../pages/signatureForm2/signature-form';

import { FormDeliveryPage } from '../pages/delivery/form-delivery';
import { FiltersPage } from '../pages/filters/filters';
import { TermsOfServicePage } from '../pages/terms-of-service/terms-of-service';
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';

import { PreloadImage } from '../components/preload-image/preload-image';
import { BackgroundImage } from '../components/background-image/background-image';
import { ShowHideContainer } from '../components/show-hide-password/show-hide-container';
import { ShowHideInput } from '../components/show-hide-password/show-hide-input';
import { ColorRadio } from '../components/color-radio/color-radio';
import { CounterInput } from '../components/counter-input/counter-input';
import { Rating } from '../components/rating/rating';
import { GoogleMap } from '../components/google-map/google-map';


// import { FeedService } from '../pages/feed/feed.service';
import { ListingService } from '../pages/listing/listing.service';
import { ProfileService } from '../pages/profile/profile.service';
// import { NotificationsService } from '../pages/notifications/notifications.service';
// import { List1Service } from '../pages/list-1/list-1.service';
// import { List2Service } from '../pages/list-2/list-2.service';
// import { ScheduleService } from '../pages/schedule/schedule.service';

// Functionalities
import { FunctionalitiesPage } from '../pages/functionalities/functionalities';
import { MapsPage } from '../pages/maps/maps';

// import { FacebookLoginPage } from '../pages/facebook-login/facebook-login';
// import { GoogleLoginPage } from '../pages/google-login/google-login';
import { ContactCardPage } from '../pages/contact-card/contact-card';

// import { FacebookLoginService } from '../pages/facebook-login/facebook-login.service';
// import { GoogleLoginService } from '../pages/google-login/google-login.service';
import { GoogleMapsService } from '../pages/maps/maps.service';

import { Storage } from '@ionic/storage';

import { SignaturePadModule } from 'angular2-signaturepad';

import {OneSignal} from '@ionic-native/onesignal';


//MyPages

import {PopoverPage} from '../pages/maps/maps';
import {PopoverPageEmergency} from '../pages/maps/maps';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '6375b85e',
  },
  'push': {
    'sender_id': '737509012599',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    ListingPage,
    // FeedPage,
    // FollowersPage,
    // LayoutsPage,
    // FormsPage,
    LoginPage,
    // NotificationsPage,
    ProfilePage,
    TabsNavigationPage,
    WalkthroughPage,
    SettingsPage,
    SignupPage,
    ForgotPasswordPage,
    // SchedulePage,
    // List1Page,
    // List2Page,
    // GridPage,
    // FormLayoutPage,
    FormDeliveryPage,
    FiltersPage,
    TermsOfServicePage,
    PrivacyPolicyPage,
    MapsPage,
    FunctionalitiesPage,
    // FacebookLoginPage,
    // GoogleLoginPage,
    ContactCardPage,
    PopoverPage,
    PopoverPageEmergency,
    SignatureForm,
    SignatureForm2,
    PreloadImage,
    BackgroundImage,
    ShowHideContainer,
    ShowHideInput,
    ColorRadio,
    CounterInput,
    Rating,
    GoogleMap
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    // IonicModule.forRoot(MyApp),
    SignaturePadModule,
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListingPage,
    // FeedPage,
    // FollowersPage,
    // LayoutsPage,
    FormDeliveryPage,
    SignatureForm,
    SignatureForm2,
    // FormsPage,
    LoginPage,
    // NotificationsPage,
    ProfilePage,
    TabsNavigationPage,
    WalkthroughPage,
    SettingsPage,
    ForgotPasswordPage,
    SignupPage,
    // SchedulePage,
    // List1Page,
    // List2Page,
    // GridPage,
    // FormLayoutPage,
    FiltersPage,
    TermsOfServicePage,
    PrivacyPolicyPage,
    PopoverPage,
    PopoverPageEmergency,
    MapsPage,
    FunctionalitiesPage,
    // FacebookLoginPage,
    // GoogleLoginPage,
    ContactCardPage
  ],
  providers: [
    // FeedService,
    ListingService,
    ProfileService,
    // NotificationsService,
    // List1Service,
    // List2Service,
    // ScheduleService,
    Storage,
<<<<<<< HEAD
    // FacebookLoginService,
    // GoogleLoginService,
    GoogleMapsService
    // OneSignal
=======
    FacebookLoginService,
    GoogleLoginService,
    GoogleMapsService,
    OneSignal
>>>>>>> parent of ba75d61... send Push
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}


