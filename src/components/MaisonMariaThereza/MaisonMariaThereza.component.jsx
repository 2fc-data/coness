import React from 'react'
import * as Styled from './MaisonMariaThereza.styles';

const MaisonMariaThereza = () => {

  return(
    <Styled.MaisonMariaThereza>

      <div className='inner-wrapper'>

        <div className='content'>
          <div className='titulo'>Incomparável, único e especial.</div>
        </div>

        <div className='content'>
          <div className='boxText'>
            <div className= 'descricao'>Nobre e arrojado, de alto nível, com elegância e sofisticação, qualidade e custo benefício, para a arte de viver bem.</div>
          </div>

          <div className='boxImg'>
            <img src="./images/empreendimentos/mmt/logoMMT.png" alt="" width='50%' height='50%'/>
          </div>
        </div>

        <div className='content'>
          <div className='boxImg'>
            <img src="./images/empreendimentos/mmt/bemvindo.jpg" alt="" />
          </div>
          
          <div className='boxText'>
            {/* <div className='titulo'>Seja Bemvindo</div> */}
            <div className='descricao'>
              Localizado na tranquila Rua Guaicurus, numa altitude de 1.230m, no topo da colina, proporcionando usufruir de vista livre. A beleza única e natural das montanhas, da serra e da cidade, beijado pelo sol.
              <br /><br />
              MAISON MARIA THEREZA traz a força da natureza, aliada à uma arquitetura de excelência arrojada e moderna, com notas de arte, com cada detalhe compondo e trazendo harmonia, equilíbrio e bem estar.
            </div>
          </div>
        </div>



        <div className='content'>
          <div className='boxText'>
            <div className='descricao'>Um residencial cheio de detalhes.</div>
          </div>

          <div className='boxImg'>
            <img src="./images/empreendimentos/mmt/detalhes1.jpg" alt="" />
          </div>
        </div>



        <div className='content'>
          <div className='boxImg'>
            <img src="./images/empreendimentos/mmt/detalhes2.jpg" alt="" />
          </div>

          <div className='boxText'>
            <div className='descricao'>Um marco na história de Poços de Caldas</div>
          </div>
        </div>



        <div className='content'>
          <div className='boxText'>
            <div className='descricao'>Viva a experiência de viver com qualidade de vida</div>
          </div>

          <div className='boxImg'>
            <img src="./images/empreendimentos/mmt/bemvindo1.jpg" alt=""  />
          </div>
        </div>



        <div className='content'>
          <div className='boxImg'>
            <img src="./images/empreendimentos/mmt/diferenciais1.jpg" alt="" />
          </div>

          <div className='boxText'>
            <div className='descricao'>
              Um projeto assinado, único e especial, inclusive de interiores.
            </div>
          </div>
        </div>

        <div className='content'>
          <div className='boxText'>
            <div className='descricao'>
              <ul>
                <li>Roof Top copleto com mirante.</li>
                <li>Pele de vidros bronze refletivos.</li>
                <li>Hydros Jacuzzi com água quente.</li>
                <li>Todas as suítes com varandas.</li>
                <li>Varanda gourmet com churrasqueira Portas balcão e persianas automatizadas, medidores individuais de água e luz, elevador de última geração.</li>
                <li>Estação de recarga para veículos elétricos, torre priorizando vista e posição solar, tomadas USB nos dormitórios.</li>
              </ul>
            </div>
          </div>

          <div className='boxImg'>
            <img src="./images/empreendimentos/mmt/diferenciais2.jpg" alt=""  />
          </div>
        </div>



        <div className='content'>
            <div className='titulo'>Tipologia - Subsolo / Térreo</div>
        </div>

        <div className='content'>
          <div className='boxImg boxImg__tipologia'>
            <div className='descricao'>Planta Baixa Sub-solo</div>
            <br /><br />
            <img src="./images/empreendimentos/mmt/tipologia_plantaBaixaSubsolo.jpg" alt=""/>
          </div>

          <div className='boxImg boxImg__tipologia'>
            <div className='descricao'>Planta Baixa Térreo</div>
            <br /><br />
            <img src="./images/empreendimentos/mmt/tipologia_plantaBaixaTerreo.jpg" alt="" />
          </div>
        </div>

        

        <div className='content'>
          <div className='boxText'>
            <div className='descricao'>Varanda Gourmet</div>  
          </div>

          <div className='boxImg'>
            <img src="./images/empreendimentos/mmt/varanda_gourmet.jpg" alt=""  />
          </div>
        </div>

        <div className='content'>
          <div className='boxImg'>
            <img src="./images/empreendimentos/mmt/cozinha_varanda.jpg" alt=""  />
          </div>

          <div className='boxText'>
            <div className='descricao'>Cozinha com Varanda</div>
          </div>
        </div>

        <div className='content'>
          <div className='boxText'>
            <div className='descricao'>Ilha Gourmet</div>  
          </div>
          
          <div className='boxImg'>
            <img src="./images/empreendimentos/mmt/ilha_gourmet.jpg" alt=""  />
          </div>      
        </div>

        <div className='content'>
          <div className='boxImg'>
            <img src="./images/empreendimentos/mmt/suite_varanda.jpg" alt=""  />
          </div>
          
          <div className='boxText'>
            <div className='descricao'>Suíte com Varanda</div>  
          </div>
        </div>

        <div className='content'>
          <div className='boxText'>
            <div className='descricao'>Cozinha com ilha gourmet</div>  
          </div>
          
          <div className='boxImg'>
            <img src="./images/empreendimentos/mmt/cozinha_gourmet.jpg" alt=""  />
          </div>
        </div>

        <div className='content'>
            <div className='boxImg'>
              <img src="./images/empreendimentos/mmt/living_integrado.jpg" alt=""  />
            </div>
            
            <div className='boxText'>
              <div className='descricao'>Living integrado</div>  
            </div>
        </div>


        <div className='content'>
          <div className='titulo'>Tipologia - Planta Baixa Pavimentos</div>
        </div>

        <div className='content'>
          <div className='boxImg'>
            <img src="./images/empreendimentos/mmt/tipologia_plantaBaixaPavimentos.jpg" alt="" />
          </div>
          

            <div className='box_pavimento'>
              <div className='descricao'>Tipo 3 - 120m2</div>
                <img src="./images/empreendimentos/mmt/tipologia_plantaBaixaPavimentos_3.jpg" alt="" />

              <div className='descricao'>Tipo 2 - 75m2</div>
              <img src="./images/empreendimentos/mmt/tipologia_plantaBaixaPavimentos_2.jpg" alt="" />

              <div className='descricao'>Tipo 1 - 122m2</div>
              <img src="./images/empreendimentos/mmt/tipologia_plantaBaixaPavimentos_1.jpg" alt="" />
            </div>
          </div>



        <div className='content'>
          <div className='titulo'>Tipologia - Roof Top</div>
        </div>  

          <div className='content'>
            <div className='boxImg'>
              <div className='descricao'>Roof Top completo</div>
              <img src="./images/empreendimentos/mmt/tipologia_roofTopPavimento_5.jpg" alt=""  />
            </div>

            <div className='box_pavimento'>
              <div className='box_text'>
                <div className='descricao'>Área de lazer</div>
                  <img src="./images/empreendimentos/mmt/tipologia_roofTopLazer.jpg" alt=""  />
              </div>

              <div className='box_text'>
                <div className='descricao'>Apartamento</div>
                  <img src="./images/empreendimentos/mmt/tipologia_roofTopAp.jpg" alt=""  />
              </div>
            </div>

        </div>
      

        <div className='content'>
          <div className='boxImg'>
            <img src="./images/empreendimentos/mmt/cob_coz_integ_gourmet.jpg" alt=""  />
          </div>

          <div className='boxText'>
            <div className='descricao'>Cozinha integrada com ilha gourmet</div>
          </div>
        </div>

        <div className='content'>
          <div className='boxText'>
            <div className='descricao'>Suíte com varanda</div>
          </div>
      
          <div className='boxImg'>
            <img src="./images/empreendimentos/mmt/cob_suite_varanda.jpg" alt=""  />
          </div>
        </div>

        <div className='content'>
          <div className='boxImg'>
            <img src="./images/empreendimentos/mmt/cob_living_integrado.jpg" alt=""  />
          </div>
          
          <div className='boxText'>
            <div className='descricao'>Living integrado</div>  
          </div>
        </div>
      
        <div className='content'>
          <div className='boxText'>
            <div className='descricao'>Viver a vida em toda a sua plenitude, esse é o melhor projeto.</div>
          </div>

          <div className='boxImg'>
            <img src="./images/empreendimentos/mmt/lazer_cobertura1.jpg" alt=""  />
          </div>
        </div>

        <div className='content'>
          <div className='boxImg'>
            <img src="./images/empreendimentos/mmt/lazer_cobertura2.jpg" alt=""  />
          </div>

          <div className='boxText'>
            <div className='descricao'>Hidro</div>
          </div>
        </div>

        <div className='content'>
          <div className='boxText'>  
            <div className='descricao'>Vista superior</div>
          </div>
          
          <div className='boxImg'>
            <img src="./images/empreendimentos/mmt/lazer_vista_sup.jpg" alt=""  />
          </div>
        </div>


        <div className='content'>
          <div className='titulo'>Área de lazer</div>
        </div>

        <div className='content'>
          <div className='boxText'>
            <div className='descricao'>Espaço kids</div>
          </div>
          
          <div className='boxImg'>
            <img src="./images/empreendimentos/mmt/lazer_espaco_kids.jpg" alt=""  />
          </div>
        </div>
      

        <div className='content'>
          <div className='boxImg'>
            <img src="./images/empreendimentos/mmt/lazer_espaco_pets.jpg" alt=""  />
          </div>

          <div className='boxText'>
            <div className='descricao'>Espaço pet</div>
          </div>
        </div>

        <div className='content'>
          <div className='boxText'>
            <div className='descricao'>Hidro SPA</div>
          </div>
          
          <div className='boxImg'>
            <img src="./images/empreendimentos/mmt/lazer_hidro.jpg" alt="" />
          </div>
        </div>

        <div className='content'>
          <div className='boxImg'>
            <img src="./images/empreendimentos/mmt/lazer_academia.jpg" alt="" />
          </div>

          <div className='boxText'>
            <div className='descricao'>Academia</div>
          </div>
        </div>

        <div className='content'>
          <div className='boxText'>
            <div className='descricao'>Salão de Festas</div>
          </div>
        
          <div className='boxImg'>
            <img src="./images/empreendimentos/mmt/lazer_salao_festa.jpg" alt=""  />
          </div>
        </div>
      </div>

    </Styled.MaisonMariaThereza>
  )

}

export default MaisonMariaThereza;