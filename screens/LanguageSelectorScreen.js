import React from 'react';
import {ScrollView} from 'react-native';

import LanguageListItem from './LanguageListItem';

const languages = [
  {
    locale: 'en',
    name: 'English'
  },
  {
    locale: 'de',
    name: 'Deutsch',
    englishName: 'German'
  },

  {
    englishName: 'Andorra',
    name: 'Andorra',
    locale: 'ca'
  },
  {
    englishName: 'United Arab Emirates',
    name: 'United Arab Emirates',
    locale: 'ar'
  },
  {
    englishName: 'Afghanistan',
    name: 'Afghanistan',
    locale: 'fa'
  },
  {
    englishName: 'Antigua and Barbuda',
    name: 'Antigua and Barbuda',
    locale: 'en'
  },
  {
    englishName: 'Anguilla',
    name: 'Anguilla',
    locale: 'en'
  },
  {
    englishName: 'Albania',
    name: 'Shqipëria',
    locale: 'sq'
  },
  {
    englishName: 'Armenia',
    name: 'Հայաստան',
    locale: 'hy'
  },
  {
    englishName: 'Angola',
    name: 'Angola',
    locale: 'pt'
  },
  {
    englishName: 'Antarctica',
    name: 'Антарктике',
    locale: 'en'
  },
  {
    englishName: 'Argentina',
    name: 'Argentina',
    locale: 'es'
  },
  {
    englishName: 'American Samoa',
    name: 'American Samoa',
    locale: 'en'
  },
  {
    englishName: 'Austria',
    name: 'Österreich',
    locale: 'de'
  },
  {
    englishName: 'Australia',
    name: 'Australia',
    locale: 'en'
  },
  {
    englishName: 'Aruba',
    name: 'Aruba',
    locale: 'nl'
  },
  {
    englishName: 'Aland Islands',
    name: 'Åland',
    locale: 'sv'
  },
  {
    englishName: 'Azerbaijan',
    name: 'Azərbaycan',
    locale: 'az'
  },
  {
    englishName: 'Bosnia and Herzegovina',
    name: 'Bosna i Hercegovina',
    locale: 'bs'
  },
  {
    englishName: 'Barbados',
    name: 'Barbados',
    locale: 'en'
  },
  {
    englishName: 'Bangladesh',
    name: 'গণপ্রজাতন্ত্রী বাংলাদেশ',
    locale: 'bn'
  },
  {
    englishName: 'Belgium',
    name: 'Belgien',
    locale: 'nl'
  },
  {
    englishName: 'Burkina Faso',
    name: 'Burkina Faso',
    locale: 'fr'
  },
  {
    englishName: 'Bulgaria',
    name: 'България',
    locale: 'bg'
  },
  {
    englishName: 'Bahrein',
    name: 'البحرين',
    locale: 'ar'
  },
  {
    englishName: 'Burundi',
    name: 'Burundi',
    locale: 'fr'
  },
  {
    englishName: 'Benin',
    name: 'Bénin',
    locale: 'fr'
  },
  {
    englishName: 'Saint-Barthélemy',
    name: 'Saint-Barthélemy',
    locale: 'fr'
  },
  {
    englishName: 'Bermuda',
    name: 'Bermuda',
    locale: 'en'
  },
  {
    englishName: 'Brunei Darussalam',
    name: 'Brunei Darussalam',
    locale: 'ms'
  },
  {
    englishName: 'Bolivia',
    name: 'Bolivia',
    locale: 'es'
  },
  {
    englishName: 'Caribbean Netherlands',
    name: 'Caribisch Nederland',
    locale: 'nl'
  },
  {
    englishName: 'Brazil',
    name: 'Brasil',
    locale: 'pt'
  },
  {
    englishName: 'Bahamas',
    name: 'Bahamas',
    locale: 'en'
  },
  {
    englishName: 'Bhutan',
    name: 'འབྲུག་ཡུལ',
    locale: 'dz'
  },
  {
    englishName: 'Bouvet Island',
    name: 'Bouvetøya',
    locale: 'no'
  },
  {
    englishName: 'Botswana',
    name: 'Botswana',
    locale: 'en'
  },
  {
    englishName: 'Belarus',
    name: 'Беларусь',
    locale: 'be'
  },
  {
    englishName: 'Belize',
    name: 'belize',
    locale: 'en'
  },
  {
    englishName: 'Canada',
    name: 'Canada',
    locale: 'en'
  },
  {
    englishName: 'Cocos (Keeling) Islands',
    name: 'Cocos (Keeling) Islands',
    locale: 'en'
  },
  {
    englishName: 'Democratic Republic of the Congo (Congo-Kinshasa former Zaire)',
    name: 'République Démocratique du Congo',
    locale: 'fr'
  },
  {
    englishName: 'Centrafrican Republic',
    name: 'République centrafricaine',
    locale: 'fr'
  },
  {
    englishName: 'Republic of the Congo (Congo-Brazzaville)',
    name: 'République du Congo',
    locale: 'fr'
  },
  {
    englishName: 'Switzerland',
    name: 'Schweiz',
    locale: 'de'
  },
  {
    englishName: 'Côte d Ivoire',
    name:'Côte d Ivoire',
    locale: 'fr'
  },
  {
    englishName: 'Cook Islands',
    name: 'Cook Islands',
    locale: 'en'
  },
  {
    englishName: 'Chile',
    name: 'Chile',
    locale: 'es'
  },
  {
    englishName: 'Cameroon',
    name: 'Cameroun',
    locale: 'fr'
  },
  {
    englishName: 'China',
    name: '中国',
    locale: 'zh-hans'
  },
  {
    englishName: 'Colombia',
    name: 'Colombia',
    locale: 'es'
  },
  {
    englishName: 'Costa Rica',
    name: 'Costa Rica',
    locale: 'es'
  },
  {
    englishName: 'Cuba',
    name: 'Cuba',
    locale: 'es'
  },
  {
    englishName: 'Cabo Verde',
    name: 'Cabo Verde',
    locale: 'pt'
  },
  {
    englishName: 'Curaçao',
    name: 'Curaçao',
    locale: 'nl'
  },
  {
    englishName: 'Christmas Island',
    name: 'Christmas Island',
    locale: 'en'
  },
  {
    englishName: 'Cyprus',
    name: 'Κύπρος',
    locale: 'el'
  },
  {
    englishName: 'Czech Republic',
    name: 'Česká republika',
    locale: 'cs'
  },
  {
    englishName: 'Germany',
    name: 'Deutschland',
    locale: 'de'
  },
  {
    englishName: 'Djibouti',
    name: 'Djibouti',
    locale: 'fr'
  },
  {
    englishName: 'Denmark',
    name: 'Danmark',
    locale: 'da'
  },
  {
    englishName: 'Dominica',
    name: 'Dominica',
    locale: 'en'
  },
  {
    englishName: 'Dominican Republic',
    name: 'República Dominicana',
    locale: 'es'
  },
  {
    englishName: 'Algeria',
    name: 'الجزائر',
    locale: 'ar'
  },
  {
    englishName: 'Ecuador',
    name: 'Ecuador',
    locale: 'es'
  },
  {
    englishName: 'Estonia',
    name: 'Eesti',
    locale: 'et'
  },
  {
    englishName: 'Egypt',
    name: 'مصر',
    locale: 'ar'
  },
  {
    englishName: 'Western Sahara',
    name: 'Sahara Occidental',
    locale: 'ar'
  },
  {
    englishName: 'Eritrea',
    name: 'ኤርትራ',
    locale: 'ti'
  },
  {
    englishName: 'Spain',
    name: 'España',
    locale: 'ast'
  },
  {
    englishName: 'Ethiopia',
    name: 'ኢትዮጵያ',
    locale: 'am'
  },
  {
    englishName: 'Finland',
    name: 'Suomi',
    locale: 'fi'
  },
  {
    englishName: 'Fiji',
    name: 'Fiji',
    locale: 'en'
  },
  {
    englishName: 'Falkland Islands',
    name: 'Falkland Islands',
    locale: 'en'
  },
  {
    englishName: 'Micronesia (Federated States of)',
    name: 'Micronesia',
    locale: 'en'
  },
  {
    englishName: 'Faroe Islands',
    name: 'Føroyar',
    locale: 'fo'
  },
  {
    englishName: 'France',
    name: 'France',
    locale: 'fr'
  },
  {
    englishName: 'Gabon',
    name: 'Gabon',
    locale: 'fr'
  },
  {
    englishName: 'United Kingdom',
    name: 'United Kingdom',
    locale: 'en'
  },
  {
    englishName: 'Grenada',
    name: 'Grenada',
    locale: 'en'
  },
  {
    englishName: 'Georgia',
    name: 'საქართველო',
    locale: 'ka'
  },
  {
    englishName: 'French Guiana',
    name: 'Guyane française',
    locale: 'fr'
  },
  {
    englishName: 'Guernsey',
    name: 'Guernsey',
    locale: 'en'
  },
  {
    englishName: 'Ghana',
    name: 'Ghana',
    locale: 'en'
  },
  {
    englishName: 'Gibraltar',
    name: 'Gibraltar',
    locale: 'en'
  },
  {
    englishName: 'Greenland',
    name: 'Kalaallit Nunaat',
    locale: 'kl'
  },
  {
    englishName: 'The Gambia',
    name: 'The Gambia',
    locale: 'en'
  },
  {
    englishName: 'Guinea',
    name: 'Guinée',
    locale: 'fr'
  },
  {
    englishName: 'Guadeloupe',
    name: 'Guadeloupe',
    locale: 'fr'
  },
  {
    englishName: 'Equatorial Guinea',
    name: 'Guiena ecuatorial',
    locale: 'es'
  },
  {
    englishName: 'Greece',
    name: 'Ελλάδα',
    locale: 'el'
  },
  {
    englishName: 'South Georgia and the South Sandwich Islands',
    name: 'South Georgia and the South Sandwich Islands',
    locale: 'en'
  },
  {
    englishName: 'Guatemala',
    name: 'Guatemala',
    locale: 'es'
  },
  {
    englishName: 'Guam',
    name: 'Guam',
    locale: 'en'
  },
  {
    englishName: 'Guinea Bissau',
    name: 'Guiné-Bissau',
    locale: 'pt'
  },
  {
    englishName: 'Guyana',
    name: 'Guyana',
    locale: 'en'
  },
  {
    englishName: 'Hong Kong (SAR of China)',
    name: '香港',
    locale: 'zh-hant'
  },
  {
    englishName: 'Heard Island and McDonald Islands',
    name: 'Heard Island and McDonald Islands',
    locale: 'en'
  },
  {
    englishName: 'Honduras',
    name: 'Honduras',
    locale: 'es'
  },
  {
    englishName: 'Croatia',
    name: 'Hrvatska',
    locale: 'hr'
  },
  {
    englishName: 'Haiti',
    name: 'Haïti',
    locale: 'fr'
  },
  {
    englishName: 'Hungary',
    name: 'Magyarország',
    locale: 'hu'
  },
  {
    englishName: 'Indonesia',
    name: 'Indonesia',
    locale: 'id'
  },
  {
    englishName: 'Ireland',
    name: 'Ireland',
    locale: 'en'
  },
  {
    englishName: 'Israel',
    name: 'ישראל',
    locale: 'he'
  },
  {
    englishName: 'Isle of Man',
    name: 'Isle of Man',
    locale: 'en'
  },
  {
    englishName: 'India',
    name: 'भारत',
    locale: 'hi'
  },
  {
    englishName: 'British Indian Ocean Territory',
    name: 'British Indian Ocean Territory',
    locale: 'en'
  },
  {
    englishName: 'Iraq',
    name: 'Iraq',
    locale: 'ar'
  },
  {
    englishName: 'Iran',
    name: 'ایران',
    locale: 'fa'
  },
  {
    englishName: 'Iceland',
    name: 'Ísland',
    locale: 'is'
  },
  {
    englishName: 'Italy',
    name: 'Italia',
    locale: 'it'
  },
  {
    englishName: 'Jersey',
    name: 'Jersey',
    locale: 'en'
  },
  {
    englishName: 'Jamaica',
    name: 'Jamaica',
    locale: 'en'
  },
  {
    englishName: 'Jordan',
    name: 'الأُرْدُن',
    locale: 'ar'
  },
  {
    englishName: 'Japan',
    name: '日本',
    locale: 'ja'
  },
  {
    englishName: 'Kenya',
    name: 'Kenya',
    locale: 'sw'
  },
  {
    englishName: 'Kyrgyzstan',
    name: 'Кыргызстан',
    locale: 'ky'
  },
  {
    englishName: 'Cambodia',
    name: 'កម្ពុជា',
    locale: 'km'
  },
  {
    englishName: 'Kiribati',
    name: 'Kiribati',
    locale: 'en'
  },
  {
    englishName: 'Comores',
    name: 'Comores',
    locale: 'ar'
  },
  {
    englishName: 'Saint Kitts and Nevis',
    name: 'Saint Kitts and Nevis',
    locale: 'en'
  },
  {
    englishName: 'North Korea',
    name: '북조선',
    locale: 'ko'
  },
  {
    englishName: 'South Korea',
    name: '대한민국',
    locale: 'ko'
  },
  {
    englishName: 'Kuweit',
    name: 'الكويت',
    locale: 'ar'
  },
  {
    englishName: 'Cayman Islands',
    name: 'Cayman Islands',
    locale: 'en'
  },
  {
    englishName: 'Kazakhstan',
    name: 'Қазақстан',
    locale: 'kk'
  },
  {
    englishName: 'Laos',
    name: 'ປະຊາຊົນລາວ',
    locale: 'lo'
  },
  {
    englishName: 'Lebanon',
    name: 'Liban',
    locale: 'ar'
  },
  {
    englishName: 'Saint Lucia',
    name: 'Saint Lucia',
    locale: 'en'
  },
  {
    englishName: 'Liechtenstein',
    name: 'Liechtenstein',
    locale: 'de'
  },
  {
    englishName: 'Sri Lanka',
    name: 'ශ්‍රී ලංකා',
    locale: 'si'
  },
  {
    englishName: 'Liberia',
    name: 'Liberia',
    locale: 'en'
  },
  {
    englishName: 'Lesotho',
    name: 'Lesotho',
    locale: 'en'
  },
  {
    englishName: 'Lithuania',
    name: 'Lietuva',
    locale: 'lt'
  },
  {
    englishName: 'Luxembourg',
    name: 'Luxemburg',
    locale: 'lb'
  },
  {
    englishName: 'Latvia',
    name: 'Latvija',
    locale: 'lv'
  },
  {
    englishName: 'Libya',
    name: 'ليبيا',
    locale: 'ar'
  },
  {
    englishName: 'Morocco',
    name: 'Maroc',
    locale: 'fr'
  },
  {
    englishName: 'Monaco',
    name: 'Monaco',
    locale: 'fr'
  },
  {
    englishName: 'Moldova',
    name: 'Moldova',
    locale: 'ro'
  },
  {
    englishName: 'Montenegro',
    name: 'Crna Gora',
    locale: 'srp'
  },
  {
    englishName: 'Saint Martin (French part)',
    name: 'Saint-Martin',
    locale: 'fr'
  },
  {
    englishName: 'Madagascar',
    name: 'Madagasikara',
    locale: 'mg'
  },
  {
    englishName: 'Marshall Islands',
    name: 'Marshall Islands',
    locale: 'en'
  },
  {
    englishName: 'Macedonia (Former Yugoslav Republic of)',
    name: 'Македонија',
    locale: 'mk'
  },
  {
    englishName: 'Mali',
    name: 'Mali',
    locale: 'fr'
  },
  {
    englishName: 'Myanmar',
    name: 'မြန်မာ',
    locale: 'my'
  },
  {
    englishName: 'Mongolia',
    name: 'Монгол Улс',
    locale: 'mn'
  },
  {
    englishName: 'Macao (SAR of China)',
    name: '澳門',
    locale: 'zh-hant'
  },
  {
    englishName: 'Northern Mariana Islands',
    name: 'Northern Mariana Islands',
    locale: 'en'
  },
  {
    englishName: 'Martinique',
    name: 'Martinique',
    locale: 'fr'
  },
  {
    englishName: 'Mauritania',
    name: 'Mauritanie',
    locale: 'ar'
  },
  {
    englishName: 'Montserrat',
    name: 'Montserrat',
    locale: 'en'
  },
  {
    englishName: 'Malta',
    name: 'Malta',
    locale: 'mt'
  },
  {
    englishName: 'Mauritius',
    name: 'Maurice',
    locale: 'mfe'
  },
  {
    englishName: 'Maldives',
    name: '',
    locale: 'dv'
  },
  {
    englishName: 'Malawi',
    name: 'Malawi',
    locale: 'en'
  },
  {
    englishName: 'Mexico',
    name: 'México',
    locale: 'es'
  },
  {
    englishName: 'Malaysia',
    name: '',
    locale: 'ms'
  },
  {
    englishName: 'Mozambique',
    name: 'Mozambique',
    locale: 'pt'
  },
  {
    englishName: 'Namibia',
    name: 'Namibia',
    locale: 'en'
  },
  {
    englishName: 'New Caledonia',
    name: 'Nouvelle-Calédonie',
    locale: 'fr'
  },
  {
    englishName: 'Niger',
    name: 'Niger',
    locale: 'fr'
  },
  {
    englishName: 'Norfolk Island',
    name: 'Norfolk Island',
    locale: 'en'
  },
  {
    englishName: 'Nigeria',
    name: 'Nigeria',
    locale: 'en'
  },
  {
    englishName: 'Nicaragua',
    name: 'Nicaragua',
    locale: 'es'
  },
  {
    englishName: 'The Netherlands',
    name: 'Nederland',
    locale: 'nl'
  },
  {
    englishName: 'Norway',
    name: 'Norge',
    locale: 'nb'
  },
  {
    englishName: 'Nepal',
    name: 'Nepal',
    locale: 'ne'
  },
  {
    englishName: 'Nauru',
    name: 'Nauru',
    locale: 'na'
  },
  {
    englishName: 'Niue',
    name: 'Niue',
    locale: 'niu'
  },
  {
    englishName: 'New Zealand',
    name: 'New Zealand',
    locale: 'mi'
  },
  {
    englishName: 'Oman',
    name: 'سلطنة عُمان',
    locale: 'ar'
  },
  {
    englishName: 'Panama',
    name: 'Panama',
    locale: 'es'
  },
  {
    englishName: 'Peru',
    name: 'Perú',
    locale: 'es'
  },
  {
    englishName: 'French Polynesia',
    name: 'Polynésie française',
    locale: 'fr'
  },
  {
    englishName: 'Papua New Guinea',
    name: 'Papua New Guinea',
    locale: 'en'
  },
  {
    englishName: 'Philippines',
    name: 'Philippines',
    locale: 'en'
  },
  {
    englishName: 'Pakistan',
    name: 'پاکستان',
    locale: 'en'
  },
  {
    englishName: 'Poland',
    name: 'Polska',
    locale: 'pl'
  },
  {
    englishName: 'Saint Pierre and Miquelon',
    name: 'Saint-Pierre-et-Miquelon',
    locale: 'fr'
  },
  {
    englishName: 'Pitcairn',
    name: 'Pitcairn',
    locale: 'en'
  },
  {
    englishName: 'Puerto Rico',
    name: 'Puerto Rico',
    locale: 'es'
  },
  {
    englishName: 'Palestinian Territory',
    name: 'Palestinian Territory',
    locale: 'ar'
  },
  {
    englishName: 'Portugal',
    name: 'Portugal',
    locale: 'pt'
  },
  {
    englishName: 'Palau',
    name: 'Palau',
    locale: 'en'
  },
  {
    englishName: 'Paraguay',
    name: 'Paraguay',
    locale: 'es'
  },
  {
    englishName: 'Qatar',
    name: 'قطر',
    locale: 'ar'
  },
  {
    englishName: 'Reunion',
    name: 'La Réunion',
    locale: 'fr'
  },
  {
    englishName: 'Romania',
    name: 'România',
    locale: 'ro'
  },
  {
    englishName: 'Serbia',
    name: 'Србија',
    locale: 'sr'
  },
  {
    englishName: 'Russia',
    name: 'Россия',
    locale: 'ru'
  },
  {
    englishName: 'Rwanda',
    name: 'Rwanda',
    locale: 'rw'
  },
  {
    englishName: 'Saudi Arabia',
    name: 'السعودية',
    locale: 'ar'
  },
  {
    englishName: 'Solomon Islands',
    name: 'Solomon Islands',
    locale: 'en'
  },
  {
    englishName: 'Seychelles',
    name: 'Seychelles',
    locale: 'fr'
  },
  {
    englishName: 'Sudan',
    name: 'السودان',
    locale: 'ar'
  },
  {
    englishName: 'Sweden',
    name: 'Sverige',
    locale: 'sv'
  },
  {
    englishName: 'Singapore',
    name: 'Singapore',
    locale: 'zh-hans'
  },
  {
    englishName: 'Saint Helena',
    name: 'Saint Helena',
    locale: 'en'
  },
  {
    englishName: 'Slovenia',
    name: 'Slovenija',
    locale: 'sl'
  },
  {
    englishName: 'Svalbard and Jan Mayen',
    name: 'Svalbard and Jan Mayen',
    locale: 'no'
  },
  {
    englishName: 'Slovakia',
    name: 'Slovensko',
    locale: 'sk'
  },
  {
    englishName: 'Sierra Leone',
    name: 'Sierra Leone',
    locale: 'en'
  },
  {
    englishName: 'San Marino',
    name: 'San Marino',
    locale: 'it'
  },
  {
    englishName: 'Sénégal',
    name: 'Sénégal',
    locale: 'fr'
  },
  {
    englishName: 'Somalia',
    name: 'Somalia',
    locale: 'so'
  },
  {
    englishName: 'Suriname',
    name: 'Suriname',
    locale: 'nl'
  },
  {
    englishName: 'São Tomé and Príncipe',
    name: 'São Tomé e Príncipe',
    locale: 'pt'
  },
  {
    englishName: 'South Sudan',
    name: 'South Sudan',
    locale: 'en'
  },
  {
    englishName: 'El Salvador',
    name: 'El Salvador',
    locale: 'es'
  },
  {
    englishName: 'Saint Martin (Dutch part)',
    name: 'Sint Maarten',
    locale: 'nl'
  },
  {
    englishName: 'Syria',
    name: 'Sūriyya',
    locale: 'ar'
  },
  {
    englishName: 'Swaziland',
    name: 'Swaziland',
    locale: 'en'
  },
  {
    englishName: 'Turks and Caicos Islands',
    name: 'Turks and Caicos Islands',
    locale: 'en'
  },
  {
    englishName: 'Chad',
    name: 'Tchad',
    locale: 'fr'
  },
  {
    englishName: 'French Southern and Antarctic Lands',
    name: 'Terres australes et antarctiques françaises',
    locale: 'fr'
  },
  {
    englishName: 'Togo',
    name: 'Togo',
    locale: 'fr'
  },
  {
    englishName: 'Thailand',
    name: 'ประเทศไทย',
    locale: 'th'
  },
  {
    englishName: 'Tajikistan',
    name: 'Tajikistan',
    locale: 'ru'
  },
  {
    englishName: 'Tokelau',
    name: 'Tokelau',
    locale: 'tkl'
  },
  {
    englishName: 'Timor-Leste',
    name: 'Timor-Leste',
    locale: 'pt'
  },
  {
    englishName: 'Turkmenistan',
    name: 'Türkmenistan',
    locale: 'tk'
  },
  {
    englishName: 'Tunisia',
    name: 'Tunisie',
    locale: 'ar'
  },
  {
    englishName: 'Tonga',
    name: 'Tonga',
    locale: 'en'
  },
  {
    englishName: 'Turkey',
    name: 'Türkiye',
    locale: 'tr'
  },
  {
    englishName: 'Trinidad and Tobago',
    name: 'Trinidad and Tobago',
    locale: 'en'
  },
  {
    englishName: 'Tuvalu',
    name: 'Tuvalu',
    locale: 'en'
  },
  {
    englishName: 'Taiwan',
    name: 'Taiwan',
    locale: 'zh-hant'
  },
  {
    englishName: 'Tanzania',
    name: 'Tanzania',
    locale: 'sw'
  },
  {
    englishName: 'Ukraine',
    name: 'Україна',
    locale: 'uk'
  },
  {
    englishName: 'Uganda',
    name: 'Uganda',
    locale: 'en'
  },
  {
    englishName: 'United States Minor Outlying Islands',
    name: 'United States Minor Outlying Islands',
    locale: 'en'
  },
  {
    englishName: 'United States of America',
    name: 'United States of America',
    locale: 'en'
  },
  {
    englishName: 'Uruguay',
    name: 'Uruguay',
    locale: 'es'
  },
  {
    englishName: 'Uzbekistan',
    name: '',
    locale: 'uz'
  },
  {
    englishName: 'City of the Vatican',
    name: 'Città del Vaticano',
    locale: 'it'
  },
  {
    englishName: 'Saint Vincent and the Grenadines',
    name: 'Saint Vincent and the Grenadines',
    locale: 'en'
  },
  {
    englishName: 'Venezuela',
    name: 'Venezuela',
    locale: 'es'
  },
  {
    englishName: 'British Virgin Islands',
    name: 'British Virgin Islands',
    locale: 'en'
  },
  {
    englishName: 'United States Virgin Islands',
    name: 'United States Virgin Islands',
    locale: 'en'
  },
  {
    englishName: 'Vietnam',
    name: 'Việt Nam',
    locale: 'vi'
  },
  {
    englishName: 'Vanuatu',
    name: 'Vanuatu',
    locale: 'bi'
  },
  {
    englishName: 'Wallis and Futuna',
    name: 'Wallis-et-Futuna',
    locale: 'fr'
  },
  {
    englishName: 'Samoa',
    name: 'Samoa',
    locale: 'sm'
  },
  {
    englishName: 'Yemen',
    name: 'اليَمَن',
    locale: 'ar'
  },
  {
    englishName: 'Mayotte',
    name: 'Mayotte',
    locale: 'fr'
  },
  {
    englishName: 'South Africa',
    name: 'South Africa',
    locale: 'en'
  },
  {
    englishName: 'Zambia',
    name: 'Zambia',
    locale: 'en'
  },
  {
    englishName: 'Zimbabwe',
    name: 'Zimbabwe',
    locale: 'en'
  }

];

class LanguageSelectorScreen extends React.Component {
  static navigationOptions = {
    title: 'Language'
  };

  render() {
    const {navigation} = this.props;
    const currentLocale = navigation.getParam('currentLocale');

    return (
      <ScrollView style={{marginTop: 15}}>
        {
          languages.map((language) => (
            <LanguageListItem
              key={language.locale}
              isActive={language.locale === currentLocale}
              locale={language.locale}
              name={language.name}
              englishName={language.englishName}
              onChangeLocale={() => this.changeLanguage(language)}
            />
          ))
        }
      </ScrollView>
    );
  }

  changeLanguage(language) {
    console.log(language);
    global.language = language.name;
    global.langCode = language.locale;
    this.props.navigation.navigate('Settings', {language})
  }
}

export default LanguageSelectorScreen;