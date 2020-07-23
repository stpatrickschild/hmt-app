




 <React.Fragment>
 <NavigationBar />
 <Jumbotron />
 <Layout>
   <Router>
     <Switch>
       <Route exact path="/" component={HOME} />
       <Route path="/AboutUs Us" component={AboutUsUs} />
       <Route path="/providerscost" component={ProvidersCost} />
       <Route path="/insurancefinder" component={InsuranceFinder} />
       <Route path="/resources" component={Resources} />
       <Route component={NoMatch} />
     </Switch>
   </Router>
 </Layout>
</React.Fragment>