
    <NavigationContainer style={{flex:1}}>
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor:"white",
        labelStyle: { fontSize: 12 },
        showIcon:true,
        style: { backgroundColor: 'red' },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        options={{ tabBarLabel: 'Home' }}
        
        
      /> 
      
      <Tab.Screen
        name="Notifications"
        component={SettingsScreen}
        options={{ tabBarLabel: 'Updates' }}
        Icon={<Icon  name="ios-add"
        color="#ccc"
        size={25} />}
      />
        
       
      
    </Tab.Navigator>
   
    
  </NavigationContainer >
///////////////////////////////////
<Drawer.Navigator initialRouteName="Home">
<Drawer.Screen name="Home" component={HomeScreen} />
<Drawer.Screen name="Notifications" component={SettingsScreen} />
</Drawer.Navigator>