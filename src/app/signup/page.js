'use client'
import Image from 'next/image'
import Cookies from 'universal-cookie';
import RootLayout from '@/layout/layout'
import { MAIN_STYLE } from '../../../utils/style';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Flip, Slide, toast,ToastContainer } from 'react-toastify'
import { API_URL } from '../../../utils/url';
import { Flex } from '@mantine/core';
import 'react-toastify/dist/ReactToastify.css';

import { MainContext } from '../context/context';
import { useContext } from 'react';

export default function Home() {


  const { message, setMessage } = useContext(MainContext);

  const router = useRouter()
  const [email, setEmail] = useState("");
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [adress, setadress] = useState("");
  const [gender, setgender] = useState("");
  const [nat, setnat] = useState("");
  const [cont, setcont] = useState("");
  const [mob, setmob] = useState("");

  const [pass, setPass] = useState("");
  const [cpass, setcPass] = useState("");
  const [page, setPage] = useState(1);




  const COUNTRIES = [
    {
      name: 'Afghanistan',
      code: 'AF',
      timezone: 'Afghanistan Standard Time',
      utc: 'UTC+04:30',
      mobileCode: '+93',
    },
    {
      name: 'Åland Islands',
      code: 'AX',
      timezone: 'FLE Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+358-18',
    },
    {
      name: 'Albania',
      code: 'AL',
      timezone: 'Central Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+355',
    },
    {
      name: 'Algeria',
      code: 'DZ',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+213',
    },
    {
      name: 'American Samoa',
      code: 'AS',
      timezone: 'UTC-11',
      utc: 'UTC-11:00',
      mobileCode: '+1-684',
    },
    {
      name: 'Andorra',
      code: 'AD',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+376',
    },
    {
      name: 'Angola',
      code: 'AO',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+244',
    },
    {
      name: 'Anguilla',
      code: 'AI',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-264',
    },
    {
      name: 'Antarctica',
      code: 'AQ',
      timezone: 'Pacific SA Standard Time',
      utc: 'UTC-03:00',
      mobileCode: '+',
    },
    {
      name: 'Antigua and Barbuda',
      code: 'AG',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-268',
    },
    {
      name: 'Argentina',
      code: 'AR',
      timezone: 'Argentina Standard Time',
      utc: 'UTC-03:00',
      mobileCode: '+54',
    },
    {
      name: 'Armenia',
      code: 'AM',
      timezone: 'Caucasus Standard Time',
      utc: 'UTC+04:00',
      mobileCode: '+374',
    },
    {
      name: 'Aruba',
      code: 'AW',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+297',
    },
    {
      name: 'Australia',
      code: 'AU',
      timezone: 'AUS Eastern Standard Time',
      utc: 'UTC+10:00',
      mobileCode: '+61',
    },
    {
      name: 'Austria',
      code: 'AT',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+43',
    },
    {
      name: 'Azerbaijan',
      code: 'AZ',
      timezone: 'Azerbaijan Standard Time',
      utc: 'UTC+04:00',
      mobileCode: '+994',
    },
    {
      name: 'Bahamas, The',
      code: 'BS',
      timezone: 'Eastern Standard Time',
      utc: 'UTC-05:00',
      mobileCode: '+1-242',
    },
    {
      name: 'Bahrain',
      code: 'BH',
      timezone: 'Arab Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+973',
    },
    {
      name: 'Bangladesh',
      code: 'BD',
      timezone: 'Bangladesh Standard Time',
      utc: 'UTC+06:00',
      mobileCode: '+880',
    },
    {
      name: 'Barbados',
      code: 'BB',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-246',
    },
    {
      name: 'Belarus',
      code: 'BY',
      timezone: 'Belarus Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+375',
    },
    {
      name: 'Belgium',
      code: 'BE',
      timezone: 'Romance Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+32',
    },
    {
      name: 'Belize',
      code: 'BZ',
      timezone: 'Central America Standard Time',
      utc: 'UTC-06:00',
      mobileCode: '+501',
    },
    {
      name: 'Benin',
      code: 'BJ',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+229',
    },
    {
      name: 'Bermuda',
      code: 'BM',
      timezone: 'Atlantic Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-441',
    },
    {
      name: 'Bhutan',
      code: 'BT',
      timezone: 'Bangladesh Standard Time',
      utc: 'UTC+06:00',
      mobileCode: '+975',
    },
    {
      name: 'Bolivarian Republic of Venezuela',
      code: 'VE',
      timezone: 'Venezuela Standard Time',
      utc: 'UTC-04:30',
      mobileCode: '+58',
    },
    {
      name: 'Bolivia',
      code: 'BO',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+591',
    },
    {
      name: 'Bonaire, Sint Eustatius and Saba',
      code: 'BQ',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+599',
    },
    {
      name: 'Bosnia and Herzegovina',
      code: 'BA',
      timezone: 'Central European Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+387',
    },
    {
      name: 'Botswana',
      code: 'BW',
      timezone: 'South Africa Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+267',
    },
    {
      name: 'Bouvet Island',
      code: 'BV',
      timezone: 'UTC',
      utc: 'UTC',
      mobileCode: '+',
    },
    {
      name: 'Brazil',
      code: 'BR',
      timezone: 'E. South America Standard Time',
      utc: 'UTC-03:00',
      mobileCode: '+55',
    },
    {
      name: 'British Indian Ocean Territory',
      code: 'IO',
      timezone: 'Central Asia Standard Time',
      utc: 'UTC+06:00',
      mobileCode: '+246',
    },
    {
      name: 'Brunei',
      code: 'BN',
      timezone: 'Singapore Standard Time',
      utc: 'UTC+08:00',
      mobileCode: '+673',
    },
    {
      name: 'Bulgaria',
      code: 'BG',
      timezone: 'FLE Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+359',
    },
    {
      name: 'Burkina Faso',
      code: 'BF',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+226',
    },
    {
      name: 'Burundi',
      code: 'BI',
      timezone: 'South Africa Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+257',
    },
    {
      name: 'Cabo Verde',
      code: 'CV',
      timezone: 'Cape Verde Standard Time',
      utc: 'UTC-01:00',
      mobileCode: '+238',
    },
    {
      name: 'Cambodia',
      code: 'KH',
      timezone: 'SE Asia Standard Time',
      utc: 'UTC+07:00',
      mobileCode: '+855',
    },
    {
      name: 'Cameroon',
      code: 'CM',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+237',
    },
    {
      name: 'Canada',
      code: 'CA',
      timezone: 'Eastern Standard Time',
      utc: 'UTC-05:00',
      mobileCode: '+1',
    },
    {
      name: 'Cayman Islands',
      code: 'KY',
      timezone: 'SA Pacific Standard Time',
      utc: 'UTC-05:00',
      mobileCode: '+1-345',
    },
    {
      name: 'Central African Republic',
      code: 'CF',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+236',
    },
    {
      name: 'Chad',
      code: 'TD',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+235',
    },
    {
      name: 'Chile',
      code: 'CL',
      timezone: 'Pacific SA Standard Time',
      utc: 'UTC-03:00',
      mobileCode: '+56',
    },
    {
      name: 'China',
      code: 'CN',
      timezone: 'China Standard Time',
      utc: 'UTC+08:00',
      mobileCode: '+86',
    },
    {
      name: 'Christmas Island',
      code: 'CX',
      timezone: 'SE Asia Standard Time',
      utc: 'UTC+07:00',
      mobileCode: '+61',
    },
    {
      name: 'Cocos (Keeling) Islands',
      code: 'CC',
      timezone: 'Myanmar Standard Time',
      utc: 'UTC+06:30',
      mobileCode: '+61',
    },
    {
      name: 'Colombia',
      code: 'CO',
      timezone: 'SA Pacific Standard Time',
      utc: 'UTC-05:00',
      mobileCode: '+57',
    },
    {
      name: 'Comoros',
      code: 'KM',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+269',
    },
    {
      name: 'Congo',
      code: 'CG',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+242',
    },
    {
      name: 'Congo (DRC)',
      code: 'CD',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+243',
    },
    {
      name: 'Cook Islands',
      code: 'CK',
      timezone: 'Hawaiian Standard Time',
      utc: 'UTC-10:00',
      mobileCode: '+682',
    },
    {
      name: 'Costa Rica',
      code: 'CR',
      timezone: 'Central America Standard Time',
      utc: 'UTC-06:00',
      mobileCode: '+506',
    },
    {
      name: "Côte d'Ivoire",
      code: 'CI',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+225',
    },
    {
      name: 'Croatia',
      code: 'HR',
      timezone: 'Central European Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+385',
    },
    {
      name: 'Cuba',
      code: 'CU',
      timezone: 'Eastern Standard Time',
      utc: 'UTC-05:00',
      mobileCode: '+53',
    },
    {
      name: 'Curaçao',
      code: 'CW',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+599',
    },
    {
      name: 'Cyprus',
      code: 'CY',
      timezone: 'E. Europe Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+357',
    },
    {
      name: 'Czech Republic',
      code: 'CZ',
      timezone: 'Central Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+420',
    },
    {
      name: 'Democratic Republic of Timor-Leste',
      code: 'TL',
      timezone: 'Tokyo Standard Time',
      utc: 'UTC+09:00',
      mobileCode: '+670',
    },
    {
      name: 'Denmark',
      code: 'DK',
      timezone: 'Romance Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+45',
    },
    {
      name: 'Djibouti',
      code: 'DJ',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+253',
    },
    {
      name: 'Dominica',
      code: 'DM',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-767',
    },
    {
      name: 'Dominican Republic',
      code: 'DO',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-809 and 1-829',
    },
    {
      name: 'Ecuador',
      code: 'EC',
      timezone: 'SA Pacific Standard Time',
      utc: 'UTC-05:00',
      mobileCode: '+593',
    },
    {
      name: 'Egypt',
      code: 'EG',
      timezone: 'Egypt Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+20',
    },
    {
      name: 'El Salvador',
      code: 'SV',
      timezone: 'Central America Standard Time',
      utc: 'UTC-06:00',
      mobileCode: '+503',
    },
    {
      name: 'Equatorial Guinea',
      code: 'GQ',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+240',
    },
    {
      name: 'Eritrea',
      code: 'ER',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+291',
    },
    {
      name: 'Estonia',
      code: 'EE',
      timezone: 'FLE Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+372',
    },
    {
      name: 'Ethiopia',
      code: 'ET',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+251',
    },
    {
      name: 'Falkland Islands (Islas Malvinas)',
      code: 'FK',
      timezone: 'SA Eastern Standard Time',
      utc: 'UTC-03:00',
      mobileCode: '+500',
    },
    {
      name: 'Faroe Islands',
      code: 'FO',
      timezone: 'GMT Standard Time',
      utc: 'UTC',
      mobileCode: '+298',
    },
    {
      name: 'Fiji Islands',
      code: 'FJ',
      timezone: 'Fiji Standard Time',
      utc: 'UTC+12:00',
      mobileCode: '+679',
    },
    {
      name: 'Finland',
      code: 'FI',
      timezone: 'FLE Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+358',
    },
    {
      name: 'France',
      code: 'FR',
      timezone: 'Romance Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+33',
    },
    {
      name: 'French Guiana',
      code: 'GF',
      timezone: 'SA Eastern Standard Time',
      utc: 'UTC-03:00',
      mobileCode: '+594',
    },
    {
      name: 'French Polynesia',
      code: 'PF',
      timezone: 'Hawaiian Standard Time',
      utc: 'UTC-10:00',
      mobileCode: '+689',
    },
    {
      name: 'French Southern and Antarctic Lands',
      code: 'TF',
      timezone: 'West Asia Standard Time',
      utc: 'UTC+05:00',
      mobileCode: '+',
    },
    {
      name: 'Gabon',
      code: 'GA',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+241',
    },
    {
      name: 'Gambia, The',
      code: 'GM',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+220',
    },
    {
      name: 'Georgia',
      code: 'GE',
      timezone: 'Georgian Standard Time',
      utc: 'UTC+04:00',
      mobileCode: '+995',
    },
    {
      name: 'Germany',
      code: 'DE',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+49',
    },
    {
      name: 'Ghana',
      code: 'GH',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+233',
    },
    {
      name: 'Gibraltar',
      code: 'GI',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+350',
    },
    {
      name: 'Greece',
      code: 'GR',
      timezone: 'GTB Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+30',
    },
    {
      name: 'Greenland',
      code: 'GL',
      timezone: 'Greenland Standard Time',
      utc: 'UTC-03:00',
      mobileCode: '+299',
    },
    {
      name: 'Grenada',
      code: 'GD',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-473',
    },
    {
      name: 'Guadeloupe',
      code: 'GP',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+590',
    },
    {
      name: 'Guam',
      code: 'GU',
      timezone: 'West Pacific Standard Time',
      utc: 'UTC+10:00',
      mobileCode: '+1-671',
    },
    {
      name: 'Guatemala',
      code: 'GT',
      timezone: 'Central America Standard Time',
      utc: 'UTC-06:00',
      mobileCode: '+502',
    },
    {
      name: 'Guernsey',
      code: 'GG',
      timezone: 'GMT Standard Time',
      utc: 'UTC',
      mobileCode: '+44-1481',
    },
    {
      name: 'Guinea',
      code: 'GN',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+224',
    },
    {
      name: 'Guinea-Bissau',
      code: 'GW',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+245',
    },
    {
      name: 'Guyana',
      code: 'GY',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+592',
    },
    {
      name: 'Haiti',
      code: 'HT',
      timezone: 'Eastern Standard Time',
      utc: 'UTC-05:00',
      mobileCode: '+509',
    },
    {
      name: 'Heard Island and McDonald Islands',
      code: 'HM',
      timezone: 'Mauritius Standard Time',
      utc: 'UTC+04:00',
      mobileCode: '+ ',
    },
    {
      name: 'Honduras',
      code: 'HN',
      timezone: 'Central America Standard Time',
      utc: 'UTC-06:00',
      mobileCode: '+504',
    },
    {
      name: 'Hong Kong SAR',
      code: 'HK',
      timezone: 'China Standard Time',
      utc: 'UTC+08:00',
      mobileCode: '+852',
    },
    {
      name: 'Hungary',
      code: 'HU',
      timezone: 'Central Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+36',
    },
    {
      name: 'Iceland',
      code: 'IS',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+354',
    },
    {
      name: 'India',
      code: 'IN',
      timezone: 'India Standard Time',
      utc: 'UTC+05:30',
      mobileCode: '+91',
    },
    {
      name: 'Indonesia',
      code: 'ID',
      timezone: 'SE Asia Standard Time',
      utc: 'UTC+07:00',
      mobileCode: '+62',
    },
    {
      name: 'Iran',
      code: 'IR',
      timezone: 'Iran Standard Time',
      utc: 'UTC+03:30',
      mobileCode: '+98',
    },
    {
      name: 'Iraq',
      code: 'IQ',
      timezone: 'Arabic Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+964',
    },
    {
      name: 'Ireland',
      code: 'IE',
      timezone: 'GMT Standard Time',
      utc: 'UTC',
      mobileCode: '+353',
    },
    {
      name: 'Israel',
      code: 'IL',
      timezone: 'Israel Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+972',
    },
    {
      name: 'Italy',
      code: 'IT',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+39',
    },
    {
      name: 'Jamaica',
      code: 'JM',
      timezone: 'SA Pacific Standard Time',
      utc: 'UTC-05:00',
      mobileCode: '+1-876',
    },
    {
      name: 'Jan Mayen',
      code: 'SJ',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+47',
    },
    {
      name: 'Japan',
      code: 'JP',
      timezone: 'Tokyo Standard Time',
      utc: 'UTC+09:00',
      mobileCode: '+81',
    },
    {
      name: 'Jersey',
      code: 'JE',
      timezone: 'GMT Standard Time',
      utc: 'UTC',
      mobileCode: '+44-1534',
    },
    {
      name: 'Jordan',
      code: 'JO',
      timezone: 'Jordan Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+962',
    },
    {
      name: 'Kazakhstan',
      code: 'KZ',
      timezone: 'Central Asia Standard Time',
      utc: 'UTC+06:00',
      mobileCode: '+7',
    },
    {
      name: 'Kenya',
      code: 'KE',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+254',
    },
    {
      name: 'Kiribati',
      code: 'KI',
      timezone: 'UTC+12',
      utc: 'UTC+12:00',
      mobileCode: '+686',
    },
    {
      name: 'Korea',
      code: 'KR',
      timezone: 'Korea Standard Time',
      utc: 'UTC+09:00',
      mobileCode: '+82',
    },
    {
      name: 'Kosovo',
      code: 'XK',
      timezone: 'Central European Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+',
    },
    {
      name: 'Kuwait',
      code: 'KW',
      timezone: 'Arab Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+965',
    },
    {
      name: 'Kyrgyzstan',
      code: 'KG',
      timezone: 'Central Asia Standard Time',
      utc: 'UTC+06:00',
      mobileCode: '+996',
    },
    {
      name: 'Laos',
      code: 'LA',
      timezone: 'SE Asia Standard Time',
      utc: 'UTC+07:00',
      mobileCode: '+856',
    },
    {
      name: 'Latvia',
      code: 'LV',
      timezone: 'FLE Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+371',
    },
    {
      name: 'Lebanon',
      code: 'LB',
      timezone: 'Middle East Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+961',
    },
    {
      name: 'Lesotho',
      code: 'LS',
      timezone: 'South Africa Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+266',
    },
    {
      name: 'Liberia',
      code: 'LR',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+231',
    },
    {
      name: 'Libya',
      code: 'LY',
      timezone: 'E. Europe Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+218',
    },
    {
      name: 'Liechtenstein',
      code: 'LI',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+423',
    },
    {
      name: 'Lithuania',
      code: 'LT',
      timezone: 'FLE Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+370',
    },
    {
      name: 'Luxembourg',
      code: 'LU',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+352',
    },
    {
      name: 'Macao SAR',
      code: 'MO',
      timezone: 'China Standard Time',
      utc: 'UTC+08:00',
      mobileCode: '+853',
    },
    {
      name: 'Macedonia, Former Yugoslav Republic of',
      code: 'MK',
      timezone: 'Central European Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+389',
    },
    {
      name: 'Madagascar',
      code: 'MG',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+261',
    },
    {
      name: 'Malawi',
      code: 'MW',
      timezone: 'South Africa Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+265',
    },
    {
      name: 'Malaysia',
      code: 'MY',
      timezone: 'Singapore Standard Time',
      utc: 'UTC+08:00',
      mobileCode: '+60',
    },
    {
      name: 'Maldives',
      code: 'MV',
      timezone: 'West Asia Standard Time',
      utc: 'UTC+05:00',
      mobileCode: '+960',
    },
    {
      name: 'Mali',
      code: 'ML',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+223',
    },
    {
      name: 'Malta',
      code: 'MT',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+356',
    },
    {
      name: 'Man, Isle of',
      code: 'IM',
      timezone: 'GMT Standard Time',
      utc: 'UTC',
      mobileCode: '+44-1624',
    },
    {
      name: 'Marshall Islands',
      code: 'MH',
      timezone: 'UTC+12',
      utc: 'UTC+12:00',
      mobileCode: '+692',
    },
    {
      name: 'Martinique',
      code: 'MQ',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+596',
    },
    {
      name: 'Mauritania',
      code: 'MR',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+222',
    },
    {
      name: 'Mauritius',
      code: 'MU',
      timezone: 'Mauritius Standard Time',
      utc: 'UTC+04:00',
      mobileCode: '+230',
    },
    {
      name: 'Mayotte',
      code: 'YT',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+262',
    },
    {
      name: 'Mexico',
      code: 'MX',
      timezone: 'Central Standard Time (Mexico)',
      utc: 'UTC-06:00',
      mobileCode: '+52',
    },
    {
      name: 'Micronesia',
      code: 'FM',
      timezone: 'West Pacific Standard Time',
      utc: 'UTC+10:00',
      mobileCode: '+691',
    },
    {
      name: 'Moldova',
      code: 'MD',
      timezone: 'GTB Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+373',
    },
    {
      name: 'Monaco',
      code: 'MC',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+377',
    },
    {
      name: 'Mongolia',
      code: 'MN',
      timezone: 'Ulaanbaatar Standard Time',
      utc: 'UTC+08:00',
      mobileCode: '+976',
    },
    {
      name: 'Montenegro',
      code: 'ME',
      timezone: 'Central European Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+382',
    },
    {
      name: 'Montserrat',
      code: 'MS',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-664',
    },
    {
      name: 'Morocco',
      code: 'MA',
      timezone: 'Morocco Standard Time',
      utc: 'UTC',
      mobileCode: '+212',
    },
    {
      name: 'Mozambique',
      code: 'MZ',
      timezone: 'South Africa Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+258',
    },
    {
      name: 'Myanmar',
      code: 'MM',
      timezone: 'Myanmar Standard Time',
      utc: 'UTC+06:30',
      mobileCode: '+95',
    },
    {
      name: 'Namibia',
      code: 'NA',
      timezone: 'Namibia Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+264',
    },
    {
      name: 'Nauru',
      code: 'NR',
      timezone: 'UTC+12',
      utc: 'UTC+12:00',
      mobileCode: '+674',
    },
    {
      name: 'Nepal',
      code: 'NP',
      timezone: 'Nepal Standard Time',
      utc: 'UTC+05:45',
      mobileCode: '+977',
    },
    {
      name: 'Netherlands',
      code: 'NL',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+31',
    },
    {
      name: 'New Caledonia',
      code: 'NC',
      timezone: 'Central Pacific Standard Time',
      utc: 'UTC+11:00',
      mobileCode: '+687',
    },
    {
      name: 'New Zealand',
      code: 'NZ',
      timezone: 'New Zealand Standard Time',
      utc: 'UTC+12:00',
      mobileCode: '+64',
    },
    {
      name: 'Nicaragua',
      code: 'NI',
      timezone: 'Central America Standard Time',
      utc: 'UTC-06:00',
      mobileCode: '+505',
    },
    {
      name: 'Niger',
      code: 'NE',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+227',
    },
    {
      name: 'Nigeria',
      code: 'NG',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+234',
    },
    {
      name: 'Niue',
      code: 'NU',
      timezone: 'UTC-11',
      utc: 'UTC-11:00',
      mobileCode: '+683',
    },
    {
      name: 'Norfolk Island',
      code: 'NF',
      timezone: 'Central Pacific Standard Time',
      utc: 'UTC+11:00',
      mobileCode: '+672',
    },
    {
      name: 'North Korea',
      code: 'KP',
      timezone: 'Korea Standard Time',
      utc: 'UTC+09:00',
      mobileCode: '+850',
    },
    {
      name: 'Northern Mariana Islands',
      code: 'MP',
      timezone: 'West Pacific Standard Time',
      utc: 'UTC+10:00',
      mobileCode: '+1-670',
    },
    {
      name: 'Norway',
      code: 'NO',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+47',
    },
    {
      name: 'Oman',
      code: 'OM',
      timezone: 'Arabian Standard Time',
      utc: 'UTC+04:00',
      mobileCode: '+968',
    },
    {
      name: 'Pakistan',
      code: 'PK',
      timezone: 'Pakistan Standard Time',
      utc: 'UTC+05:00',
      mobileCode: '+92',
    },
    {
      name: 'Palau',
      code: 'PW',
      timezone: 'Tokyo Standard Time',
      utc: 'UTC+09:00',
      mobileCode: '+680',
    },
    {
      name: 'Palestinian Authority',
      code: 'PS',
      timezone: 'Egypt Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+970',
    },
    {
      name: 'Panama',
      code: 'PA',
      timezone: 'SA Pacific Standard Time',
      utc: 'UTC-05:00',
      mobileCode: '+507',
    },
    {
      name: 'Papua New Guinea',
      code: 'PG',
      timezone: 'West Pacific Standard Time',
      utc: 'UTC+10:00',
      mobileCode: '+675',
    },
    {
      name: 'Paraguay',
      code: 'PY',
      timezone: 'Paraguay Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+595',
    },
    {
      name: 'Peru',
      code: 'PE',
      timezone: 'SA Pacific Standard Time',
      utc: 'UTC-05:00',
      mobileCode: '+51',
    },
    {
      name: 'Philippines',
      code: 'PH',
      timezone: 'Singapore Standard Time',
      utc: 'UTC+08:00',
      mobileCode: '+63',
    },
    {
      name: 'Pitcairn Islands',
      code: 'PN',
      timezone: 'Pacific Standard Time',
      utc: 'UTC-08:00',
      mobileCode: '+870',
    },
    {
      name: 'Poland',
      code: 'PL',
      timezone: 'Central European Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+48',
    },
    {
      name: 'Portugal',
      code: 'PT',
      timezone: 'GMT Standard Time',
      utc: 'UTC',
      mobileCode: '+351',
    },
    {
      name: 'Puerto Rico',
      code: 'PR',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-787 and 1-939',
    },
    {
      name: 'Qatar',
      code: 'QA',
      timezone: 'Arab Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+974',
    },
    {
      name: 'Reunion',
      code: 'RE',
      timezone: 'Mauritius Standard Time',
      utc: 'UTC+04:00',
      mobileCode: '+262',
    },
    {
      name: 'Romania',
      code: 'RO',
      timezone: 'GTB Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+40',
    },
    {
      name: 'Russia',
      code: 'RU',
      timezone: 'Russian Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+7',
    },
    {
      name: 'Rwanda',
      code: 'RW',
      timezone: 'South Africa Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+250',
    },
    {
      name: 'Saint Barthélemy',
      code: 'BL',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+590',
    },
    {
      name: 'Saint Helena, Ascension and Tristan da Cunha',
      code: 'SH',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+290',
    },
    {
      name: 'Saint Kitts and Nevis',
      code: 'KN',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-869',
    },
    {
      name: 'Saint Lucia',
      code: 'LC',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-758',
    },
    {
      name: 'Saint Martin (French part)',
      code: 'MF',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+590',
    },
    {
      name: 'Saint Pierre and Miquelon',
      code: 'PM',
      timezone: 'Greenland Standard Time',
      utc: 'UTC-03:00',
      mobileCode: '+508',
    },
    {
      name: 'Saint Vincent and the Grenadines',
      code: 'VC',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-784',
    },
    {
      name: 'Samoa',
      code: 'WS',
      timezone: 'Samoa Standard Time',
      utc: 'UTC+13:00',
      mobileCode: '+685',
    },
    {
      name: 'San Marino',
      code: 'SM',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+378',
    },
    {
      name: 'São Tomé and Príncipe',
      code: 'ST',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+239',
    },
    {
      name: 'Saudi Arabia',
      code: 'SA',
      timezone: 'Arab Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+966',
    },
    {
      name: 'Senegal',
      code: 'SN',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+221',
    },
    {
      name: 'Serbia',
      code: 'RS',
      timezone: 'Central Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+381',
    },
    {
      name: 'Seychelles',
      code: 'SC',
      timezone: 'Mauritius Standard Time',
      utc: 'UTC+04:00',
      mobileCode: '+248',
    },
    {
      name: 'Sierra Leone',
      code: 'SL',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+232',
    },
    {
      name: 'Singapore',
      code: 'SG',
      timezone: 'Singapore Standard Time',
      utc: 'UTC+08:00',
      mobileCode: '+65',
    },
    {
      name: 'Sint Maarten (Dutch part)',
      code: 'SX',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+599',
    },
    {
      name: 'Slovakia',
      code: 'SK',
      timezone: 'Central Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+421',
    },
    {
      name: 'Slovenia',
      code: 'SI',
      timezone: 'Central Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+386',
    },
    {
      name: 'Solomon Islands',
      code: 'SB',
      timezone: 'Central Pacific Standard Time',
      utc: 'UTC+11:00',
      mobileCode: '+677',
    },
    {
      name: 'Somalia',
      code: 'SO',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+252',
    },
    {
      name: 'South Africa',
      code: 'ZA',
      timezone: 'South Africa Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+27',
    },
    {
      name: 'South Georgia and the South Sandwich Islands',
      code: 'GS',
      timezone: 'UTC-02',
      utc: 'UTC-02:00',
      mobileCode: '+',
    },
    {
      name: 'South Sudan',
      code: 'SS',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+211',
    },
    {
      name: 'Spain',
      code: 'ES',
      timezone: 'Romance Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+34',
    },
    {
      name: 'Sri Lanka',
      code: 'LK',
      timezone: 'Sri Lanka Standard Time',
      utc: 'UTC+05:30',
      mobileCode: '+94',
    },
    {
      name: 'Sudan',
      code: 'SD',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+249',
    },
    {
      name: 'Suriname',
      code: 'SR',
      timezone: 'SA Eastern Standard Time',
      utc: 'UTC-03:00',
      mobileCode: '+597',
    },
    {
      name: 'Svalbard',
      code: 'SJ',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+47',
    },
    {
      name: 'Swaziland',
      code: 'SZ',
      timezone: 'South Africa Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+268',
    },
    {
      name: 'Sweden',
      code: 'SE',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+46',
    },
    {
      name: 'Switzerland',
      code: 'CH',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+41',
    },
    {
      name: 'Syria',
      code: 'SY',
      timezone: 'Syria Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+963',
    },
    {
      name: 'Taiwan',
      code: 'TW',
      timezone: 'Taipei Standard Time',
      utc: 'UTC+08:00',
      mobileCode: '+886',
    },
    {
      name: 'Tajikistan',
      code: 'TJ',
      timezone: 'West Asia Standard Time',
      utc: 'UTC+05:00',
      mobileCode: '+992',
    },
    {
      name: 'Tanzania',
      code: 'TZ',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+255',
    },
    {
      name: 'Thailand',
      code: 'TH',
      timezone: 'SE Asia Standard Time',
      utc: 'UTC+07:00',
      mobileCode: '+66',
    },
    {
      name: 'Togo',
      code: 'TG',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+228',
    },
    {
      name: 'Tokelau',
      code: 'TK',
      timezone: 'Tonga Standard Time',
      utc: 'UTC+13:00',
      mobileCode: '+690',
    },
    {
      name: 'Tonga',
      code: 'TO',
      timezone: 'Tonga Standard Time',
      utc: 'UTC+13:00',
      mobileCode: '+676',
    },
    {
      name: 'Trinidad and Tobago',
      code: 'TT',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-868',
    },
    {
      name: 'Tunisia',
      code: 'TN',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+216',
    },
    {
      name: 'Turkey',
      code: 'TR',
      timezone: 'Turkey Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+90',
    },
    {
      name: 'Turkmenistan',
      code: 'TM',
      timezone: 'West Asia Standard Time',
      utc: 'UTC+05:00',
      mobileCode: '+993',
    },
    {
      name: 'Turks and Caicos Islands',
      code: 'TC',
      timezone: 'Eastern Standard Time',
      utc: 'UTC-05:00',
      mobileCode: '+1-649',
    },
    {
      name: 'Tuvalu',
      code: 'TV',
      timezone: 'UTC+12',
      utc: 'UTC+12:00',
      mobileCode: '+688',
    },
    {
      name: 'U.S. Minor Outlying Islands',
      code: 'UM',
      timezone: 'UTC-11',
      utc: 'UTC-11:00',
      mobileCode: '+1',
    },
    {
      name: 'Uganda',
      code: 'UG',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+256',
    },
    {
      name: 'Ukraine',
      code: 'UA',
      timezone: 'FLE Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+380',
    },
    {
      name: 'United Arab Emirates',
      code: 'AE',
      timezone: 'Arabian Standard Time',
      utc: 'UTC+04:00',
      mobileCode: '+971',
    },
    {
      name: 'United Kingdom',
      code: 'GB',
      timezone: 'GMT Standard Time',
      utc: 'UTC',
      mobileCode: '+44',
    },
    {
      name: 'United States',
      code: 'US',
      timezone: 'Pacific Standard Time',
      utc: 'UTC-08:00',
      mobileCode: '+1',
    },
    {
      name: 'Uruguay',
      code: 'UY',
      timezone: 'Montevideo Standard Time',
      utc: 'UTC-03:00',
      mobileCode: '+598',
    },
    {
      name: 'Uzbekistan',
      code: 'UZ',
      timezone: 'West Asia Standard Time',
      utc: 'UTC+05:00',
      mobileCode: '+998',
    },
    {
      name: 'Vanuatu',
      code: 'VU',
      timezone: 'Central Pacific Standard Time',
      utc: 'UTC+11:00',
      mobileCode: '+678',
    },
    {
      name: 'Vatican City',
      code: 'VA',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+379',
    },
    {
      name: 'Vietnam',
      code: 'VN',
      timezone: 'SE Asia Standard Time',
      utc: 'UTC+07:00',
      mobileCode: '+84',
    },
    {
      name: 'Virgin Islands, U.S.',
      code: 'VI',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-340',
    },
    {
      name: 'Virgin Islands, British',
      code: 'VG',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-284',
    },
    {
      name: 'Wallis and Futuna',
      code: 'WF',
      timezone: 'UTC+12',
      utc: 'UTC+12:00',
      mobileCode: '+681',
    },
    {
      name: 'Yemen',
      code: 'YE',
      timezone: 'Arab Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+967',
    },
    {
      name: 'Zambia',
      code: 'ZM',
      timezone: 'South Africa Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+260',
    },
    {
      name: 'Zimbabwe',
      code: 'ZW',
      timezone: 'South Africa Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+263',
    },
  ];

  // {
  //   name: 'Afghanistan',
  //   code: 'AF',
  //   timezone: 'Afghanistan Standard Time',
  //   utc: 'UTC+04:30',
  //   mobileCode: '+93',
  // },
  


  const notify = (type,msg)=>{
    setMessage("from sinup")
console.log(message)
    const options={
      hideProgressBar:true,
      draggable:true,
      closeButton:false,
      
    }
    switch(type){
      case 'success':
        toast.success(msg,options)
        break;

        case 'error':
          toast.error(msg,options)
          break;

          case 'warn':
            toast.warn(msg,options)
            break;

          

    }
   
  }



  const thirdpageval = ()=>{

    if(age==""||gender==""||nat==""||phone=="",adress==""||cont==""){
    notify("warn","All feilds are requiered")
    }else{





      login();
    }




  }

  const secondpageval=()=>{


    if(pass==""||cpass==""||email==""||name==""){
      notify("warn","All feilds are requiered")
      return
    }


    if(pass.length<8){
   
       notify("warn","password must be at least 8 charechters")
      return;
    }


    if(pass!=cpass){

      notify("warn","Password mismatch")
      return;
    }



    
    const requestOptions = {
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
        
      },
    
  };
  

  
  fetch(`${API_URL}/users?filters[$and][0][email][$eq]=`+email, requestOptions)
      .then(response => response.json())
      .then(data =>{




        if(data.length!=0){
        
          notify("warn","Email already exists")
         
        }else{
          setPage(2)
        }
      
      
         
      });
  
  
  




  }


  const login=()=>{



    // if(cpass!=pass){
    //   alert("missmatched password")
    //   return 
    // }


    const requestOptions = {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
        
      },
      body: JSON.stringify(
        {
     name: name ,  
    username: email,
    type:3,
    email: email,
    phone:mob,
    gender:gender,
    age:age,
    nationality:nat,
    adress:adress,
    country:cont,
    password: pass,
          }
      )
  };
  
console.log(requestOptions);
  
  fetch(`${API_URL}/auth/local/register`, requestOptions)
      .then(response => response.json())
      .then(data =>{


        console.log(data)
        if(data.jwt){

          const cookies = new Cookies();
          cookies.set('login', data.jwt, { path: '/' });
       
      router.replace("/dashboard")
  
        }else{
          
        //  console.log(data.error.message)
  
          if(data.error.message=="Email or Username are already taken"){
            notify("warn","Email already exists")

          }else{
            notify("error",msg);
          }
        
        }
      
         
      });
  
  
  



  }

  return (






<main
         
          tabindex="0"
          x-data
          x-init="$el.focus()"
        >
         

         <section  style={{display:page==1?"block":"none"}} class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
       
          DHB E-learning platform
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <div class="space-y-4 md:space-y-6" >

              <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                      <input
                      
                      value={name}  onChange={(event)=>{setname(event.target.value)}} 
                      type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block 
                      w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                       dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jhone Doe" required=""/>
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input
                      
                      value={email}  onChange={(event)=>{setEmail(event.target.value)}} 
                      type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block 
                      w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                       dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input
                          value={pass}  onChange={(event)=>{setPass(event.target.value)}} 
                      type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border
                       border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                         dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>

                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                      <input
                          value={cpass}  onChange={(event)=>{setcPass(event.target.value)}} 
                      type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border
                       border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                         dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                
             


 {/* <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                      <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Select Gender</option>
  <option value="M">Male</option>
  <option value="F">Female</option>
</select>
                  </div> */}




                  <div onClick={()=>{secondpageval()}} style={{backgroundColor:MAIN_STYLE.primary}} class="w-full text-white bg-primary-600
                   hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600
                     dark:hover:bg-primary-700 dark:focus:ring-primary-800">Next</div>
                
              </div>
          </div>
      </div>
  </div>
</section>



      {/* --------------------------------- */}



      <section  style={{display:page==2?"block":"none"}} class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <div class="space-y-4 md:space-y-6" >

           
             

                  <div style={{display:"flex",justifyContent:"space-between",flexDirection:"row"}}>

                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                      <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Select Gender</option>
  <option value="M">Male</option>
  <option value="F">Female</option>
</select>
                  </div>


                  <div>
                      <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year of birth</label>
                      <input
                      
                      value={age}  onChange={(event)=>{setage(event.target.value)}} 
                      type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block 
                      w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                       dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0000" required=""/>
                  </div>

                

                  </div>


                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nationality</label>
                      <select value={nat} onChange={(event)=>{setnat(event.target.value)}} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
 
  <option selected>Select Nationality</option>
  {
     COUNTRIES.map(count=>(
   <option value={count.code} >{count.name}</option>
  ))
}
 

</select>
                  </div>




                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country of residence</label>
                      <select value={cont} onChange={(event)=>{setcont(event.target.value)}} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
 
  <option selected>Select Country</option>
  {
     COUNTRIES.map(count=>(
   <option value={count.code} >{count.name +" / "+ count.mobileCode}</option>
  ))
}
 

</select>
                  </div>



                  <div>
                      <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                      <input
                      
                      value={mob}  onChange={(event)=>{setmob(event.target.value)}} 
                      type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block 
                      w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                       dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0000000000" required=""/>
                  </div>


                  <div>
                      <label for="adress" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adress</label>
                      <input
                      
                      value={adress}  onChange={(event)=>{setadress(event.target.value)}} 
                      type="text" name="adress" id="adress" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block 
                      w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                       dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Adress" required=""/>
                  </div>



                  {/* <div>
                      <label for="adress" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Id file</label>
                   
                   
<div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 

                  </div> */}



                  


            <div style={{display:"flex",justifyContent:"flex-end",flexDirection:"row"}}>

            <div onClick={()=>{setPage(1)}} style={{backgroundColor:"grey",marginRight:15}} class=" text-white bg-primary-600
                   hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600
                     dark:hover:bg-primary-700 dark:focus:ring-primary-800">Back</div>
                
            
                  <div onClick={()=>{thirdpageval()}} style={{backgroundColor:MAIN_STYLE.primary}} class=" text-white bg-primary-600
                   hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600
                     dark:hover:bg-primary-700 dark:focus:ring-primary-800">Next</div>

            </div>
               
                 
                

                    
                
              </div>
          </div>
      </div>
  </div>
</section>


<section  style={{display:page==3?"block":"none"}} class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
       
          DHB E-learning platform
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <div class="space-y-4 md:space-y-6" >

           
           

              

              <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID type</label>
                      <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Select ID</option>
  <option value="M">Passport</option>
  <option value="F">Driver licsence</option>
  <option value="F">Other document</option>
</select>
                  </div>




                  <div>
                      <label for="adress" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID file</label>
                   
                   
<div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 

                  </div>



                  



               
                 
                  <div onClick={()=>{setPage(2)}} style={{backgroundColor:"grey"}} class="w-full text-white bg-primary-600
                   hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600
                     dark:hover:bg-primary-700 dark:focus:ring-primary-800">Back</div>
                
            
                  <div onClick={()=>{login()}} style={{backgroundColor:MAIN_STYLE.primary}} class="w-full text-white bg-primary-600
                   hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600
                     dark:hover:bg-primary-700 dark:focus:ring-primary-800">signup</div>

                    
                
              </div>
          </div>
      </div>
  </div>
</section>

<ToastContainer
theme="colored"

>

</ToastContainer>

          
        </main>


   
   
  )
}
