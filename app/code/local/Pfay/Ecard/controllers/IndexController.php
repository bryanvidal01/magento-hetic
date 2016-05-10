<?php 

	class Pfay_Ecard_IndexController extends Mage_Core_Controller_Front_Action
{
	 public function indexAction()
 {
  echo  Mage::getStoreConfig('ecard_section/ecard_group/ecard_field');
 }
}
 ?>