import React from 'react';
import * as Icon from 'react-feather';

function SideBar(props) {
    return (
        <div id="layoutSidenav_nav">
            <nav className="sidenav shadow-right sidenav-light">
                <div className="sidenav-menu">
                    <div className="nav accordion" id="accordionSidenav">
                        <div className="sidenav-menu-heading">Core</div>
                        <a className="nav-link collapsed" href="/" data-toggle="collapse"
                            data-target="#collapseDashboards" aria-expanded="false" aria-controls="collapseDashboards">
                            <div className="nav-link-icon">
                                {/* <i data-feather="activity"></i> */}
                                <Icon.Activity />
                            </div>
                            Dashboards
                            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseDashboards" data-parent="#accordionSidenav">
                            <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPages">
                                <a className="nav-link" href="index.html">
                                    Default
                                    <span className="badge badge-primary-soft text-primary ml-auto">Updated</span>
                                </a>
                                <a className="nav-link" href="dashboard-2.html">
                                    Multipurpose
                                    <span className="badge badge-primary-soft text-primary ml-auto">Updated</span>
                                </a>
                                <a className="nav-link" href="dashboard-3.html">
                                    Affiliate
                                    <span className="badge badge-primary-soft text-primary ml-auto">Updated</span>
                                </a>
                            </nav>
                        </div>
                        <div className="sidenav-menu-heading">App Views</div>
                        <a className="nav-link collapsed" href="/" data-toggle="collapse"
                            data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                            <div className="nav-link-icon">
                                <Icon.Grid />
                                {/* <i data-feather="grid"></i> */}
                            </div>
                            Pages
                            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapsePages" data-parent="#accordionSidenav">
                            <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPagesMenu">
                                <a className="nav-link collapsed" href="/" data-toggle="collapse"
                                    data-target="#pagesCollapseAccount" aria-expanded="false"
                                    aria-controls="pagesCollapseAccount">
                                    Account
                                    <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="pagesCollapseAccount"
                                    data-parent="#accordionSidenavPagesMenu">
                                    <nav className="sidenav-menu-nested nav">
                                        <a className="nav-link" href="account-profile.html">
                                            Profile
                                            <span className="badge badge-primary-soft text-primary ml-auto">New</span>
                                        </a>
                                        <a className="nav-link" href="account-billing.html">
                                            Billing
                                            <span className="badge badge-primary-soft text-primary ml-auto">New</span>
                                        </a>
                                        <a className="nav-link" href="account-security.html">
                                            Security
                                            <span className="badge badge-primary-soft text-primary ml-auto">New</span>
                                        </a>
                                        <a className="nav-link" href="account-notifications.html">
                                            Notifications
                                            <span className="badge badge-primary-soft text-primary ml-auto">New</span>
                                        </a>
                                    </nav>
                                </div>
                                <a className="nav-link collapsed" href="/" data-toggle="collapse"
                                    data-target="#pagesCollapseAuth" aria-expanded="false"
                                    aria-controls="pagesCollapseAuth">
                                    Authentication
                                    <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="pagesCollapseAuth"
                                    data-parent="#accordionSidenavPagesMenu">
                                    <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPagesAuth">
                                        <a className="nav-link collapsed" href="/"
                                            data-toggle="collapse" data-target="#pagesCollapseAuthBasic"
                                            aria-expanded="false" aria-controls="pagesCollapseAuthBasic">
                                            Basic
                                            <div className="sidenav-collapse-arrow"><i
                                                className="fas fa-angle-down"></i></div>
                                        </a>
                                        <div className="collapse" id="pagesCollapseAuthBasic"
                                            data-parent="#accordionSidenavPagesAuth">
                                            <nav className="sidenav-menu-nested nav">
                                                <a className="nav-link" href="auth-login-basic.html">Login</a>
                                                <a className="nav-link" href="auth-register-basic.html">Register</a>
                                                <a className="nav-link" href="auth-password-basic.html">Forgot
                                                    Password</a>
                                            </nav>
                                        </div>
                                        <a className="nav-link collapsed" href="/"
                                            data-toggle="collapse" data-target="#pagesCollapseAuthSocial"
                                            aria-expanded="false" aria-controls="pagesCollapseAuthSocial">
                                            Social
                                            <div className="sidenav-collapse-arrow"><i
                                                className="fas fa-angle-down"></i></div>
                                        </a>
                                        <div className="collapse" id="pagesCollapseAuthSocial"
                                            data-parent="#accordionSidenavPagesAuth">
                                            <nav className="sidenav-menu-nested nav">
                                                <a className="nav-link" href="auth-login-social.html">Login</a>
                                                <a className="nav-link" href="auth-register-social.html">Register</a>
                                                <a className="nav-link" href="auth-password-social.html">Forgot
                                                    Password</a>
                                            </nav>
                                        </div>
                                    </nav>
                                </div>
                                <a className="nav-link collapsed" href="/" data-toggle="collapse"
                                    data-target="#pagesCollapseError" aria-expanded="false"
                                    aria-controls="pagesCollapseError">
                                    Error
                                    <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="pagesCollapseError"
                                    data-parent="#accordionSidenavPagesMenu">
                                    <nav className="sidenav-menu-nested nav">
                                        <a className="nav-link" href="error-400.html">
                                            400 Error
                                            <span className="badge badge-primary-soft text-primary ml-auto">New</span>
                                        </a>
                                        <a className="nav-link" href="error-401.html">
                                            401 Error
                                            <span className="badge badge-primary-soft text-primary ml-auto">New</span>
                                        </a>
                                        <a className="nav-link" href="error-403.html">
                                            403 Error
                                            <span className="badge badge-primary-soft text-primary ml-auto">New</span>
                                        </a>
                                        <a className="nav-link" href="error-404-1.html">
                                            404 Error 1
                                            <span className="badge badge-primary-soft text-primary ml-auto">New</span>
                                        </a>
                                        <a className="nav-link" href="error-404-2.html">
                                            404 Error 2
                                            <span className="badge badge-primary-soft text-primary ml-auto">New</span>
                                        </a>
                                        <a className="nav-link" href="error-500.html">
                                            500 Error
                                            <span className="badge badge-primary-soft text-primary ml-auto">New</span>
                                        </a>
                                        <a className="nav-link" href="error-503.html">
                                            503 Error
                                            <span className="badge badge-primary-soft text-primary ml-auto">New</span>
                                        </a>
                                        <a className="nav-link" href="error-504.html">
                                            504 Error
                                            <span className="badge badge-primary-soft text-primary ml-auto">New</span>
                                        </a>
                                    </nav>
                                </div>
                                <a className="nav-link collapsed" href="/" data-toggle="collapse"
                                    data-target="#pagesCollapseKnowledgeBase" aria-expanded="false"
                                    aria-controls="pagesCollapseKnowledgeBase">
                                    Knowledge Base
                                    <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="pagesCollapseKnowledgeBase"
                                    data-parent="#accordionSidenavPagesMenu">
                                    <nav className="sidenav-menu-nested nav">
                                        <a className="nav-link" href="knowledge-base-home-1.html">
                                            Home 1
                                            <span className="badge badge-primary-soft text-primary ml-auto">New</span>
                                        </a>
                                        <a className="nav-link" href="knowledge-base-home-2.html">
                                            Home 2
                                            <span className="badge badge-primary-soft text-primary ml-auto">New</span>
                                        </a>
                                        <a className="nav-link" href="knowledge-base-category.html">
                                            Category
                                            <span className="badge badge-primary-soft text-primary ml-auto">New</span>
                                        </a>
                                        <a className="nav-link" href="knowledge-base-article.html">
                                            Article
                                            <span className="badge badge-primary-soft text-primary ml-auto">New</span>
                                        </a>
                                    </nav>
                                </div>
                                <a className="nav-link" href="pricing.html">
                                    Pricing
                                    <span className="badge badge-primary-soft text-primary ml-auto">New</span>
                                </a>
                                <a className="nav-link" href="invoice.html">
                                    Invoice
                                    <span className="badge badge-primary-soft text-primary ml-auto">New</span>
                                </a>
                            </nav>
                        </div>
                        <a className="nav-link collapsed" href="/" data-toggle="collapse"
                            data-target="#collapseFlows" aria-expanded="false" aria-controls="collapseFlows">
                            <div className="nav-link-icon">
                                {/* <i data-feather="repeat"></i> */}
                                <Icon.Repeat />
                            </div>
                            Flows
                            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseFlows" data-parent="#accordionSidenav">
                            <nav className="sidenav-menu-nested nav">
                                <a className="nav-link" href="multi-tenant-select.html">Multi-Tenant Registration</a>
                                <a className="nav-link" href="wizard.html">
                                    Wizard
                                    <span className="badge badge-primary-soft text-primary ml-auto">New</span>
                                </a>
                            </nav>
                        </div>
                        <div className="sidenav-menu-heading">UI Toolkit</div>
                        <a className="nav-link collapsed" href="/" data-toggle="collapse"
                            data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div className="nav-link-icon">
                                {/* <i data-feather="layout"></i> */}
                                <Icon.Layout />
                            </div>
                            Layout
                            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseLayouts" data-parent="#accordionSidenav">
                            <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavLayout">
                                <a className="nav-link collapsed" href="/" data-toggle="collapse"
                                    data-target="#collapseLayoutSidenavVariations" aria-expanded="false"
                                    aria-controls="collapseLayoutSidenavVariations">
                                    Sidenav Variations
                                    <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="collapseLayoutSidenavVariations"
                                    data-parent="#accordionSidenavLayout">
                                    <nav className="sidenav-menu-nested nav">
                                        <a className="nav-link" href="layout-static.html">Static Navigation</a>
                                        <a className="nav-link" href="layout-dark.html">Dark Sidenav</a>
                                        <a className="nav-link" href="layout-rtl.html">RTL Layout</a>
                                    </nav>
                                </div>
                                <a className="nav-link collapsed" href="/" data-toggle="collapse"
                                    data-target="#collapseLayoutContainers" aria-expanded="false"
                                    aria-controls="collapseLayoutContainers">
                                    Container Options
                                    <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="collapseLayoutContainers"
                                    data-parent="#accordionSidenavLayout">
                                    <nav className="sidenav-menu-nested nav">
                                        <a className="nav-link" href="layout-boxed.html">
                                            Boxed Layout
                                            <span className="badge badge-primary-soft text-primary ml-auto">New</span>
                                        </a>
                                        <a className="nav-link" href="layout-fluid.html">Fluid Layout</a>
                                    </nav>
                                </div>
                                <a className="nav-link collapsed" href="/" data-toggle="collapse"
                                    data-target="#collapseLayoutsPageHeaders" aria-expanded="false"
                                    aria-controls="collapseLayoutsPageHeaders">
                                    Page Headers
                                    <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="collapseLayoutsPageHeaders"
                                    data-parent="#accordionSidenavLayout">
                                    <nav className="sidenav-menu-nested nav">
                                        <a className="nav-link" href="header-simplified.html">Simplified</a>
                                        <a className="nav-link" href="header-compact.html">
                                            Compact
                                            <span className="badge badge-primary-soft text-primary ml-auto">New</span>
                                        </a>
                                        <a className="nav-link" href="header-overlap.html">Content Overlap</a>
                                        <a className="nav-link" href="header-breadcrumbs.html">Breadcrumbs</a>
                                        <a className="nav-link" href="header-light.html">Light</a>
                                    </nav>
                                </div>
                                <a className="nav-link collapsed" href="/" data-toggle="collapse"
                                    data-target="#collapseLayoutsStarterTemplates" aria-expanded="false"
                                    aria-controls="collapseLayoutsStarterTemplates">
                                    Starter Layouts
                                    <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="collapseLayoutsStarterTemplates"
                                    data-parent="#accordionSidenavLayout">
                                    <nav className="sidenav-menu-nested nav">
                                        <a className="nav-link" href="starter-default.html">Default</a>
                                        <a className="nav-link" href="starter-minimal.html">
                                            Minimal
                                            <span className="badge badge-primary-soft text-primary ml-auto">New</span>
                                        </a>
                                    </nav>
                                </div>
                            </nav>
                        </div>
                        <a className="nav-link collapsed" href="/" data-toggle="collapse"
                            data-target="#collapseComponents" aria-expanded="false" aria-controls="collapseComponents">
                            <div className="nav-link-icon">
                                {/* <i data-feather="package"></i> */}
                                <Icon.Package />
                            </div>
                            Components
                            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseComponents" data-parent="#accordionSidenav">
                            <nav className="sidenav-menu-nested nav">
                                <a className="nav-link" href="alerts.html">Alerts</a>
                                <a className="nav-link" href="avatars.html">Avatars</a>
                                <a className="nav-link" href="badges.html">Badges</a>
                                <a className="nav-link" href="buttons.html">Buttons</a>
                                <a className="nav-link" href="cards.html">
                                    Cards
                                    <span className="badge badge-primary-soft text-primary ml-auto">Updated</span>
                                </a>
                                <a className="nav-link" href="dropdowns.html">Dropdowns</a>
                                <a className="nav-link" href="forms.html">
                                    Forms
                                    <span className="badge badge-primary-soft text-primary ml-auto">Updated</span>
                                </a>
                                <a className="nav-link" href="modals.html">Modals</a>
                                <a className="nav-link" href="navigation.html">
                                    Navigation
                                    <span className="badge badge-primary-soft text-primary ml-auto">Updated</span>
                                </a>
                                <a className="nav-link" href="progress.html">Progress</a>
                                <a className="nav-link" href="step.html">
                                    Step
                                    <span className="badge badge-primary-soft text-primary ml-auto">New</span>
                                </a>
                                <a className="nav-link" href="timeline.html">
                                    Timeline
                                    <span className="badge badge-primary-soft text-primary ml-auto">New</span>
                                </a>
                                <a className="nav-link" href="toasts.html">Toasts</a>
                                <a className="nav-link" href="tooltips.html">Tooltips</a>
                            </nav>
                        </div>
                        <a className="nav-link collapsed" href="/" data-toggle="collapse"
                            data-target="#collapseUtilities" aria-expanded="false" aria-controls="collapseUtilities">
                            <div className="nav-link-icon">
                                {/* <i data-feather="tool"></i> */}
                                <Icon.Tool />
                            </div>
                            Utilities
                            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseUtilities" data-parent="#accordionSidenav">
                            <nav className="sidenav-menu-nested nav">
                                <a className="nav-link" href="animations.html">Animations</a>
                                <a className="nav-link" href="background.html">Background</a>
                                <a className="nav-link" href="borders.html">Borders</a>
                                <a className="nav-link" href="lift.html">Lift</a>
                                <a className="nav-link" href="shadows.html">Shadows</a>
                                <a className="nav-link" href="typography.html">
                                    Typography
                                    <span className="badge badge-primary-soft text-primary ml-auto">Updated</span>
                                </a>
                            </nav>
                        </div>
                        <div className="sidenav-menu-heading">Addons</div>
                        <a className="nav-link" href="charts.html">
                            <div className="nav-link-icon">
                                {/* <i data-feather="bar-chart"></i> */}
                                <Icon.BarChart />
                            </div>
                            Charts
                        </a>
                        <a className="nav-link" href="tables.html">
                            <div className="nav-link-icon">
                                {/* <i data-feather="filter"></i> */}
                                <Icon.Filter />
                            </div>
                            Tables
                        </a>
                    </div>
                </div>
                <div className="sidenav-footer">
                    <div className="sidenav-footer-content">
                        <div className="sidenav-footer-subtitle">Logged in as:</div>
                        <div className="sidenav-footer-title">Valerie Luna</div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default SideBar;