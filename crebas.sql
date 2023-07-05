/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     05/07/2023 2:20:45 CH                        */
/*==============================================================*/


alter table ASSOCIATION_4 
   drop foreign key FK_ASSOCIAT_ASSOCIATI_SACH;

alter table ASSOCIATION_4 
   drop foreign key FK_ASSOCIAT_ASSOCIATI_NGON_NGU;

alter table ASSOCIATION_6 
   drop foreign key FK_ASSOCIAT_ASSOCIATI_SACH;

alter table ASSOCIATION_6 
   drop foreign key FK_ASSOCIAT_ASSOCIATI_THU_THU;

alter table LOAI_SACH 
   drop foreign key FK_LOAI_SAC_ASSOCIATI_SACH;

alter table SACH 
   drop foreign key FK_SACH_ASSOCIATI_TAC_GIA;

alter table SACH 
   drop foreign key FK_SACH_ASSOCIATI_CHUYEN_N;

alter table SACH 
   drop foreign key FK_SACH_ASSOCIATI_NHA_XUAT;


alter table ASSOCIATION_4 
   drop foreign key FK_ASSOCIAT_ASSOCIATI_NGON_NGU;

alter table ASSOCIATION_4 
   drop foreign key FK_ASSOCIAT_ASSOCIATI_SACH;

drop table if exists ASSOCIATION_4;


alter table ASSOCIATION_6 
   drop foreign key FK_ASSOCIAT_ASSOCIATI_THU_THU;

alter table ASSOCIATION_6 
   drop foreign key FK_ASSOCIAT_ASSOCIATI_SACH;

drop table if exists ASSOCIATION_6;

drop table if exists CHUYEN_NGANH;


alter table LOAI_SACH 
   drop foreign key FK_LOAI_SAC_ASSOCIATI_SACH;

drop table if exists LOAI_SACH;

drop table if exists NGON_NGU;

drop table if exists NHA_XUAT_BAN;


alter table SACH 
   drop foreign key FK_SACH_ASSOCIATI_TAC_GIA;

alter table SACH 
   drop foreign key FK_SACH_ASSOCIATI_CHUYEN_N;

alter table SACH 
   drop foreign key FK_SACH_ASSOCIATI_NHA_XUAT;

drop table if exists SACH;

drop table if exists TAC_GIA;

drop table if exists THU_THU;

/*==============================================================*/
/* Table: ASSOCIATION_4                                         */
/*==============================================================*/
create table ASSOCIATION_4
(
   MA_NGON_NGU          varchar(10) not null  comment '',
   MA_SACH              varchar(10) not null  comment '',
   primary key (MA_NGON_NGU, MA_SACH)
);

/*==============================================================*/
/* Table: ASSOCIATION_6                                         */
/*==============================================================*/
create table ASSOCIATION_6
(
   MA_NHAN_VIEN         varchar(10) not null  comment '',
   MA_SACH              varchar(10) not null  comment '',
   primary key (MA_NHAN_VIEN, MA_SACH)
);

/*==============================================================*/
/* Table: CHUYEN_NGANH                                          */
/*==============================================================*/
create table CHUYEN_NGANH
(
   MA_CHUYEN_NGANH      varchar(10) not null  comment '',
   TEN_CHUYEN_NHGANH    varchar(100)  comment '',
   primary key (MA_CHUYEN_NGANH)
);

/*==============================================================*/
/* Table: LOAI_SACH                                             */
/*==============================================================*/
create table LOAI_SACH
(
   MA_LOAI_SACH         varchar(10) not null  comment '',
   MA_SACH              varchar(10) not null  comment '',
   TEN_LOAI_SACH        varchar(100)  comment '',
   primary key (MA_LOAI_SACH)
);

/*==============================================================*/
/* Table: NGON_NGU                                              */
/*==============================================================*/
create table NGON_NGU
(
   MA_NGON_NGU          varchar(10) not null  comment '',
   TEN_NGON_NGU         varchar(100)  comment '',
   primary key (MA_NGON_NGU)
);

/*==============================================================*/
/* Table: NHA_XUAT_BAN                                          */
/*==============================================================*/
create table NHA_XUAT_BAN
(
   MA_NXB               varchar(10) not null  comment '',
   TEN_NXB              varchar(100)  comment '',
   EMAIL_NXB            varchar(100)  comment '',
   SDT_NXB              varchar(10)  comment '',
   DIA_CHI_NXB          varchar(1000)  comment '',
   primary key (MA_NXB)
);

/*==============================================================*/
/* Table: SACH                                                  */
/*==============================================================*/
create table SACH
(
   MA_SACH              varchar(10) not null  comment '',
   MA_TAC_GIA           char(10) not null  comment '',
   MA_CHUYEN_NGANH      varchar(10) not null  comment '',
   MA_NXB               varchar(10) not null  comment '',
   TEN_SACH             varchar(100)  comment '',
   NAM_XUAT_BAN         date  comment '',
   GIA_TIEN             int  comment '',
   HINH_ANH             varchar(1000)  comment '',
   SO_TRANG             int  comment '',
   TOM_TAT_NOI_DUNG     varchar(1000)  comment '',
   primary key (MA_SACH)
);

/*==============================================================*/
/* Table: TAC_GIA                                               */
/*==============================================================*/
create table TAC_GIA
(
   MA_TAC_GIA           char(10) not null  comment '',
   TEN_TAC_GIA          varchar(100)  comment '',
   GIOI_TINH_TAC_GIA    varchar(100)  comment '',
   NGAY_SINH_TAC_GIA    date  comment '',
   EMAIL_TAC_GIA        varchar(100)  comment '',
   SDT_TAC_GIA          varchar(10)  comment '',
   DIA_CHI_TAC_GIA      varchar(1000)  comment '',
   ANH_DAI_DIEN         varchar(1000)  comment '',
   primary key (MA_TAC_GIA)
);

/*==============================================================*/
/* Table: THU_THU                                               */
/*==============================================================*/
create table THU_THU
(
   MA_NHAN_VIEN         varchar(10) not null  comment '',
   TEN_NHAN_VIEN        varchar(100)  comment '',
   CCCD                 varchar(100)  comment '',
   GIOI_TINH_NHAN_VIEN  varchar(100)  comment '',
   SDT_NHAN_VIEN        varchar(10)  comment '',
   NGAY_SINH_NHAN_VIEN  date  comment '',
   DIA_CHI_NHAN_VIEN    varchar(100)  comment '',
   EMAIL_NHAN_VIEN      varchar(100)  comment '',
   primary key (MA_NHAN_VIEN)
);

alter table ASSOCIATION_4 add constraint FK_ASSOCIAT_ASSOCIATI_SACH foreign key (MA_SACH)
      references SACH (MA_SACH) on delete restrict on update restrict;

alter table ASSOCIATION_4 add constraint FK_ASSOCIAT_ASSOCIATI_NGON_NGU foreign key (MA_NGON_NGU)
      references NGON_NGU (MA_NGON_NGU) on delete restrict on update restrict;

alter table ASSOCIATION_6 add constraint FK_ASSOCIAT_ASSOCIATI_SACH foreign key (MA_SACH)
      references SACH (MA_SACH) on delete restrict on update restrict;

alter table ASSOCIATION_6 add constraint FK_ASSOCIAT_ASSOCIATI_THU_THU foreign key (MA_NHAN_VIEN)
      references THU_THU (MA_NHAN_VIEN) on delete restrict on update restrict;

alter table LOAI_SACH add constraint FK_LOAI_SAC_ASSOCIATI_SACH foreign key (MA_SACH)
      references SACH (MA_SACH) on delete restrict on update restrict;

alter table SACH add constraint FK_SACH_ASSOCIATI_TAC_GIA foreign key (MA_TAC_GIA)
      references TAC_GIA (MA_TAC_GIA) on delete restrict on update restrict;

alter table SACH add constraint FK_SACH_ASSOCIATI_CHUYEN_N foreign key (MA_CHUYEN_NGANH)
      references CHUYEN_NGANH (MA_CHUYEN_NGANH) on delete restrict on update restrict;

alter table SACH add constraint FK_SACH_ASSOCIATI_NHA_XUAT foreign key (MA_NXB)
      references NHA_XUAT_BAN (MA_NXB) on delete restrict on update restrict;

