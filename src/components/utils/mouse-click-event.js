import {
  searchEnded,
  openCloseQuantitySettings,
  openCloseOrderSettings,
  openCloseSelectList,
  openCloseAttentionWindow }  from '../../actions';
import { bindActionCreators } from 'redux';
import store from '../../store';
const { dispatch } = store;

const {
  onSearchEnded,
  onOpenCloseQuantitySettings,
  onOpenCloseOrderSettings,
  onOpenCloseSelectList,
  onOpenCloseAttentionWindow } =
bindActionCreators({
  onSearchEnded : searchEnded,
  onOpenCloseQuantitySettings : openCloseQuantitySettings,
  onOpenCloseOrderSettings : openCloseOrderSettings,
  onOpenCloseSelectList : openCloseSelectList,
  onOpenCloseAttentionWindow : openCloseAttentionWindow }, dispatch);

const mouseClickEvent = (e) => {

  const searchingBox = document.querySelector('.searching-box');
  const quantitySettings = document.querySelector('.quantity-div');
  const orderSettings = document.querySelector('.order-div');
  const deliveryBox = document.querySelector('.select-div');
  const attentionWindow = document.querySelector('.CAW-main');
  const closeBtn = document.querySelector('.wipe');

  const target = e.target;
  
  if (!searchingBox || !quantitySettings || !orderSettings) {
    return
  }

  if (target === searchingBox || searchingBox.contains(target)) {
    onOpenCloseQuantitySettings(false);
    onOpenCloseOrderSettings(false);
  } else if (target === quantitySettings || quantitySettings.contains(target)) {
    onSearchEnded();
    onOpenCloseOrderSettings(false);
  } else if (target === orderSettings || orderSettings.contains(target)) {
    onSearchEnded();
    onOpenCloseQuantitySettings(false);
  } else {
    onSearchEnded();
    onOpenCloseQuantitySettings(false);
    onOpenCloseOrderSettings(false);
  }

  if (target === deliveryBox || deliveryBox.contains(target)) {
    return;
  } else {
    onOpenCloseSelectList(false);
  }

  if (  target === attentionWindow ||
        attentionWindow.contains(target) ||
        target === closeBtn ||
        closeBtn.contains(target)) {
    return
  } else {
    onOpenCloseAttentionWindow(false);
  }

};

export default mouseClickEvent;