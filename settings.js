/*Bing map API key for tiles*/
/* Ключ API для карт Bing */
bingAPIkey='Ao-qIKzfniV6GlToMb-aXCTw3ZJSndx1WI2WRur_oY7LzHUaupKs5lE0F4FdAprQ';

/* true for show hardware icons */
/* Значение true для показа иконок оборудования */
_imap.settings.show_icons = true;

/* true for use slider in zoom control, false - only buttons '+' & '-' */
/* Значение true для использования слайдера зума, false - просто показывать кнопки + и - */
_imap.settings.use_zoom_slider = true;

/* false - if you don't use links for hosts */
/* Значение false для использования линий связи между хостами */
_imap.settings.links_enabled = true;

/* What inventory field using for icon */
/* Поле инвентарных данных, используемое для иконки */
_imap.settings.hardware_field = 'type';

/* How many markers can spiderfy on non-max zoom map */
/* Ограничение количества маркеров при раскрытии кластера на немаксимальном зуме карты*/
_imap.settings.maxMarkersSpiderfy = 50;

/* Excluding inventory fields in popup of hosts on map */
/* Поля инвентарных данных, которые не нужно показывать в сплывающем окне хоста на карте */
_imap.settings.exluding_inventory = ['hostid','location_lat','location_lon','url_a','url_b','url_c'];

/* true - use hardware icons in markers */
/* true - использовать иконки оборудования для маркеров */
_imap.settings.useIconsInMarkers = true;

/* Zoom on map initialize */
/* Уровень увеличения карты при инициализации */
_imap.settings.startZoom = 15;

/* Coordinates on map initialize */
/* Координаты карты при инициализации */
_imap.settings.startCoordinates = [-22.547733, -44.121516];

/* false - map animation is disabled */
/* false - отключает анимацию на карте */
_imap.settings.mapAnimation = true;

/* Interval hosts update */
/* Интервал обновления хостов */
_imap.settings.intervalLoadHosts = 60;

/* Interval links update */
/* Интервал обновления связей */
_imap.settings.intervalLoadLinks = 60;

/* Interval triggers update */
/* Интервал обновления триггеров */
_imap.settings.intervalLoadTriggers = 30;

/* Use this object for settings control corners on map (order is important)
 	_imap.mapcorners['name of control'] = corner; */
/* Для управления контролами на карте используйте следующий массив (порядок имеет значение) 
 	_imap.mapcorners['название контрола'] = угол; */
/*
 Corners (углы):
 |0  1|
 |3  2|
 */
/*
_imap.mapcorners['googlesearch'] = 0;
_imap.mapcorners['lasttriggers'] = 0;
_imap.mapcorners['layers'] = 1;
_imap.mapcorners['hosts'] = 1;
_imap.mapcorners['panoramio'] = 1;
_imap.mapcorners['attribution'] = 3;
_imap.mapcorners['scale'] = 3;
_imap.mapcorners['measure'] = 3;
_imap.mapcorners['mylocationbutton'] = 2;
_imap.mapcorners['zoom'] = 2;
*/

/* If you want disble some controls */
/* Если вы хотите удалить какой-то из контролов */
/* delete (_imap.mapcorners['panoramio']); */


/* true - host's labels will show allways, false - only on mouse over */
/* true - метки хостов будут всегда показываться, false - только при наведении курсора мыши */
_imap.settings.showMarkersLabels = false;


/* Force a start layer */
/* Принудительно установить слой при загрузке */
/*_imap.settings.startbaselayer = "Google"; */

/*Show Panoramio photos from this user only*/
/*Показывать фото в Panoramio только от этого пользователя*/
/*_imap.panoramiouserid = '959842942402428529';*/
