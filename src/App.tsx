import { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { OnboardingScreen } from './components/OnboardingScreen';
import { LoginScreen } from './components/LoginScreen';
import { PermissionsScreen } from './components/PermissionsScreen';
import { HomeScreen } from './components/HomeScreen';
import { ExploreScreen } from './components/ExploreScreen';
import { SavedPlacesScreen } from './components/SavedPlacesScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { ARViewScreen } from './components/ARViewScreen';
import { HistoricalARScreen } from './components/HistoricalARScreen';
import { MenuScanScreen } from './components/MenuScanScreen';
import { MenuDetailScreen } from './components/MenuDetailScreen';
import { LandmarkDetailScreen } from './components/LandmarkDetailScreen';
import { RestaurantDetailScreen } from './components/RestaurantDetailScreen';
import { RecommendationScreen } from './components/RecommendationScreen';
import { NavigationMapScreen } from './components/NavigationMapScreen';
import { UserDetailScreen } from './components/UserDetailScreen';
import { BottomNavigation } from './components/BottomNavigation';
import { placesData, restaurantsData } from './data/placesData';

function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [selectedLandmark, setSelectedLandmark] = useState<string | null>(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<{ name: string, avatar: string, country: string } | null>(null);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  const navigateTo = (screen: string) => {
    setCurrentScreen(screen);
  };

  const selectLandmark = (landmark: string) => {
    setSelectedLandmark(landmark);
    setCurrentScreen('landmark-detail');
  };

  const selectRestaurant = (restaurant: string) => {
    setSelectedRestaurant(restaurant);
    setCurrentScreen('restaurant-detail');
  };

  const selectUser = (user: { name: string, avatar: string, country: string }) => {
    setSelectedUser(user);
    setCurrentScreen('user-detail');
  };

  // Smart place selector - determines if it's a landmark or restaurant
  const selectPlace = (placeName: string) => {
    // Check if it's in restaurantsData
    if (restaurantsData[placeName]) {
      selectRestaurant(placeName);
    } else {
      // Otherwise treat as landmark
      selectLandmark(placeName);
    }
  };

  const handleOnboardingComplete = () => {
    setHasCompletedOnboarding(true);
    navigateTo('permissions');
  };

  // Screens that should show bottom navigation
  const showBottomNav = [
    'home',
    'explore',
    'saved',
    'profile',
    'ar-view',
    'menu-scan',
    'landmark-detail',
    'restaurant-detail',
    'recommendations',
  ].includes(currentScreen);

  // Check if current screen is AR mode
  const isARMode = currentScreen === 'ar-view' || currentScreen === 'historical-ar';

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FAFAF8]">
      <div className="relative w-full max-w-[430px] h-[932px] bg-white overflow-hidden shadow-2xl rounded-[60px]">
        {currentScreen === 'splash' && <SplashScreen onNext={() => navigateTo('login')} />}
        {currentScreen === 'login' && <LoginScreen onLogin={() => navigateTo('onboarding')} />}
        {currentScreen === 'onboarding' && <OnboardingScreen onComplete={handleOnboardingComplete} />}
        {currentScreen === 'permissions' && <PermissionsScreen onComplete={() => navigateTo('home')} />}
        
        {currentScreen === 'home' && (
          <HomeScreen 
            onStartAR={() => navigateTo('ar-view')}
            onSelectLandmark={selectLandmark}
          />
        )}

        {currentScreen === 'explore' && (
          <ExploreScreen
            onBack={() => navigateTo('home')}
            onSelectPlace={selectPlace}
          />
        )}

        {currentScreen === 'saved' && (
          <SavedPlacesScreen
            onSelectPlace={selectPlace}
          />
        )}

        {currentScreen === 'profile' && (
          <ProfileScreen
            onLogout={() => navigateTo('login')}
          />
        )}

        {currentScreen === 'ar-view' && (
          <ARViewScreen 
            onBack={() => navigateTo('home')}
            onSelectLandmark={selectLandmark}
            onHistoricalView={() => navigateTo('historical-ar')}
            onSelectRestaurant={selectRestaurant}
          />
        )}
        {currentScreen === 'historical-ar' && (
          <HistoricalARScreen onBack={() => navigateTo('ar-view')} />
        )}
        {currentScreen === 'menu-scan' && (
          <MenuScanScreen 
            onBack={() => navigateTo('home')}
            onSelectMenu={() => navigateTo('menu-detail')}
          />
        )}
        {currentScreen === 'menu-detail' && (
          <MenuDetailScreen onBack={() => navigateTo('menu-scan')} />
        )}
        {currentScreen === 'landmark-detail' && (
          <LandmarkDetailScreen 
            landmark={selectedLandmark}
            onBack={() => {
              // Smart back navigation - return to where we came from
              if (currentScreen === 'landmark-detail') {
                navigateTo('saved');
              } else {
                navigateTo('home');
              }
            }}
            onARView={() => navigateTo('ar-view')}
            onRecommendations={() => navigateTo('recommendations')}
            onNavigate={() => navigateTo('navigation')}
            onUserSelect={selectUser}
          />
        )}
        {currentScreen === 'restaurant-detail' && (
          <RestaurantDetailScreen 
            restaurant={selectedRestaurant}
            onBack={() => {
              // Smart back navigation - return to saved or ar-view
              navigateTo('saved');
            }}
            onARView={() => navigateTo('ar-view')}
            onNavigate={() => navigateTo('navigation')}
            onUserSelect={selectUser}
          />
        )}
        {currentScreen === 'recommendations' && (
          <RecommendationScreen 
            onBack={() => navigateTo('landmark-detail')}
            onSelectPlace={selectPlace}
          />
        )}
        {currentScreen === 'navigation' && (
          <NavigationMapScreen 
            onBack={() => navigateTo('landmark-detail')}
            onARView={() => navigateTo('ar-view')}
          />
        )}
        {currentScreen === 'user-detail' && (
          <UserDetailScreen 
            user={selectedUser}
            onBack={() => navigateTo('landmark-detail')}
            onSelectPlace={selectPlace}
          />
        )}
        
        {showBottomNav && (
          <BottomNavigation 
            currentScreen={currentScreen} 
            onNavigate={navigateTo}
            isARMode={isARMode}
          />
        )}
      </div>
    </div>
  );
}

export default App;