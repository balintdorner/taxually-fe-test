'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">taxually-fe-test documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-47176d711491406c1ed88d6e23d04fb9f91ba52f381447075a719ce50d1c6a2a1890efe064a1e7393ceffb262b8cf9e7646586ebd14142ebad3cf102ba5d48cd"' : 'data-target="#xs-components-links-module-AppModule-47176d711491406c1ed88d6e23d04fb9f91ba52f381447075a719ce50d1c6a2a1890efe064a1e7393ceffb262b8cf9e7646586ebd14142ebad3cf102ba5d48cd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-47176d711491406c1ed88d6e23d04fb9f91ba52f381447075a719ce50d1c6a2a1890efe064a1e7393ceffb262b8cf9e7646586ebd14142ebad3cf102ba5d48cd"' :
                                            'id="xs-components-links-module-AppModule-47176d711491406c1ed88d6e23d04fb9f91ba52f381447075a719ce50d1c6a2a1890efe064a1e7393ceffb262b8cf9e7646586ebd14142ebad3cf102ba5d48cd"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-006bc2b879f155181c60357f88ffe971c47028aa1a8cd8c337c884829ac3ebc997107c155cb95de1703418694c3a7d744ea42d2d09ff78ca2a066dc7c9c14e95"' : 'data-target="#xs-components-links-module-AuthModule-006bc2b879f155181c60357f88ffe971c47028aa1a8cd8c337c884829ac3ebc997107c155cb95de1703418694c3a7d744ea42d2d09ff78ca2a066dc7c9c14e95"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-006bc2b879f155181c60357f88ffe971c47028aa1a8cd8c337c884829ac3ebc997107c155cb95de1703418694c3a7d744ea42d2d09ff78ca2a066dc7c9c14e95"' :
                                            'id="xs-components-links-module-AuthModule-006bc2b879f155181c60357f88ffe971c47028aa1a8cd8c337c884829ac3ebc997107c155cb95de1703418694c3a7d744ea42d2d09ff78ca2a066dc7c9c14e95"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistrationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistrationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-4a67d4263a93c34e7fc418f761d0b68a4f63cc55cdfd4f9787fa7df515d92fb9d905d407b5639668cbeceb48fa525eaa300cead69b1ba4e65f202df46604cd03"' : 'data-target="#xs-components-links-module-DashboardModule-4a67d4263a93c34e7fc418f761d0b68a4f63cc55cdfd4f9787fa7df515d92fb9d905d407b5639668cbeceb48fa525eaa300cead69b1ba4e65f202df46604cd03"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-4a67d4263a93c34e7fc418f761d0b68a4f63cc55cdfd4f9787fa7df515d92fb9d905d407b5639668cbeceb48fa525eaa300cead69b1ba4e65f202df46604cd03"' :
                                            'id="xs-components-links-module-DashboardModule-4a67d4263a93c34e7fc418f761d0b68a4f63cc55cdfd4f9787fa7df515d92fb9d905d407b5639668cbeceb48fa525eaa300cead69b1ba4e65f202df46604cd03"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-8fc4279c9a4a7a56811049897d0b86b6a961863fe0c5754258caca1e30e9914943b60f1376825d42ab6ff265d99599d85053db2903dff21afaba1ac8f96aee77"' : 'data-target="#xs-components-links-module-SharedModule-8fc4279c9a4a7a56811049897d0b86b6a961863fe0c5754258caca1e30e9914943b60f1376825d42ab6ff265d99599d85053db2903dff21afaba1ac8f96aee77"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-8fc4279c9a4a7a56811049897d0b86b6a961863fe0c5754258caca1e30e9914943b60f1376825d42ab6ff265d99599d85053db2903dff21afaba1ac8f96aee77"' :
                                            'id="xs-components-links-module-SharedModule-8fc4279c9a4a7a56811049897d0b86b6a961863fe0c5754258caca1e30e9914943b60f1376825d42ab6ff265d99599d85053db2903dff21afaba1ac8f96aee77"' }>
                                            <li class="link">
                                                <a href="components/ConfirmDeletePopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmDeletePopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FileUploadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileUploadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MaterialTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MaterialTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthBaseComponent.html" data-type="entity-link" >AuthBaseComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomValidators.html" data-type="entity-link" >CustomValidators</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegexpHelper.html" data-type="entity-link" >RegexpHelper</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileHandlerService.html" data-type="entity-link" >FileHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SnackbarService.html" data-type="entity-link" >SnackbarService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/UserModel.html" data-type="entity-link" >UserModel</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});