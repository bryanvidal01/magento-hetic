<?php
class Pfay_Test_Block_Monblock extends Mage_Core_Block_Template
{
      public function methodblock()
      {
            //$helper = Mage::helper('test');
            //return '2*2 = '.$helper->foisdeux(2);
            //on initialize la variable
        $retour='';
        /* on fait une requette : aller chercher Tous les elements
        de la table pfay_test (grace à notre model test/test
        et les trier par id_pfay_test */
     $collection = Mage::getModel('test/test')->getCollection()
                                 ->setOrder('id_pfay_test','asc');
         /* ensuite on parcours le resultat de la requette et
          avec la fonction getData(), on stocke dans la variable retour
          (pour l’affichage dans le template) les données voulues */
        foreach($collection as $data)
        {
             $retour .= $data->getData('nom').' '.$data->getData('prenom')
                     .' '.$data->getData('telephone').'<br />';
         }
         //je renvoi un message de succes a l'utilisateur (juste pour que vous sachiez utiliser la fonction)
         Mage::getSingleton('adminhtml/session')->addSuccess('Cool Ca marche !!');
         return $retour;
      }
}
 ?>