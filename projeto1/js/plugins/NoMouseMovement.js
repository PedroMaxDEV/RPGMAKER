/*:
 * @plugindesc Desativa o movimento do jogador ao clicar no mapa.
 * @author Pedro Max
 * @help Este plugin impede que o jogador se mova ao clicar com o mouse.
 */

 (() => {
    Scene_Map.prototype.processMapTouch = function() {
        return; // Bloqueia o clique para movimento
    };
})();
